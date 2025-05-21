import React, { useState, useEffect, useRef } from 'react';
import OpenAI from 'openai';

// Chatbot 컴포넌트: 보태니컬 아티스트 웹사이트에서 식물 관련 질문에 답변하는 챗봇
function Chatbot() {
  // 환경변수에서 API 키 가져오기 (실제 프로덕션에서는 서버 측에서 처리하는 것이 안전합니다)
  // .env.local 파일에 VITE_OPENAI_API_KEY=sk-your-actual-key 형식으로 작성해 주세요
  const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || '';
  
  // OpenAI 클라이언트 상태
  const [openai, setOpenai] = useState(null);
  const [isApiKeyValid, setIsApiKeyValid] = useState(false);
  
  // 챗봇 상태 관리
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '안녕하세요! Flora Bota입니다. 보태니컬 아트에 관한 질문이 있으신가요?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // 메시지 목록 자동 스크롤을 위한 참조
  const messagesEndRef = useRef(null);
  
  // 컴포넌트 마운트 시 OpenAI 클라이언트 초기화
  useEffect(() => {
    // API 키가 환경변수에 설정되어 있는지 확인
    if (OPENAI_API_KEY && OPENAI_API_KEY.startsWith('sk-') && OPENAI_API_KEY.length > 20) {
      initOpenAI(OPENAI_API_KEY);
    } else {
      console.warn('유효한 OpenAI API 키가 환경변수에 설정되지 않았습니다.');
      setIsApiKeyValid(false);
    }
  }, []);
  
  // OpenAI 클라이언트 초기화 함수
  const initOpenAI = (key) => {
    try {
      const client = new OpenAI({
        apiKey: key,
        dangerouslyAllowBrowser: true // 브라우저에서 사용하기 위한 설정
      });
      setOpenai(client);
      setIsApiKeyValid(true);
      return true;
    } catch (error) {
      console.error('OpenAI 클라이언트 초기화 실패:', error);
      setIsApiKeyValid(false);
      return false;
    }
  };
  
  // 자동 스크롤 함수
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  // 메시지가 추가될 때마다 스크롤 아래로 이동
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // 챗봇 토글
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  
  // 미리 준비된 FAQ 응답
  const predefinedAnswers = {
    '안녕': '안녕하세요! 식물이나 보태니컬 아트에 관해 무엇이든 물어보세요.',
    '식물': '식물에 관한 질문이군요! Flora Kim 아티스트는 주로 한국의 토착 식물과 멸종 위기 식물을 세밀하게 기록하는 작업에 중점을 두고 있습니다.',
    '작품': 'Flora Kim 아티스트의 작품은 포트폴리오 페이지에서 확인하실 수 있습니다. 수채화와 색연필을 주로 사용하여 식물의 아름다움을 담아냅니다.',
    '워크숍': '현재 정규 강의로는 "보태니컬 일러스트레이션의 기초"(초급)와 "식물과 빛의 만남"(중급)이 있습니다. 특별 워크숍으로는 "장미의 서정"과 "수목원 스케치 트립"이 예정되어 있습니다. 자세한 일정과 가격은 워크숍 페이지를 확인해주세요.',
    '강의': '정규 강의는 매주 진행되며, 초급자 대상의 "보태니컬 일러스트레이션의 기초"(토요일 오후)와 중급자 대상의 "식물과 빛의 만남"(금요일 오전)이 있습니다. 모든 강의는 소수정예로 진행됩니다.',
    '특별 워크숍': '2025년에는 "장미의 서정: 영국 정원의 장미 그리기"(6월)와 "자연에서 화폭으로: 수목원 스케치 트립"(5월, 9월)이 예정되어 있습니다. 특별 워크숍은 인원이 제한되어 있어 조기 마감될 수 있습니다.',
    '가격': '작품 가격은 크기와 복잡도에 따라 다릅니다. 정규 강의는 월 180,000원~220,000원, 특별 워크숍은 280,000원~340,000원입니다. 자세한 가격 정보는 협업 페이지를 참고하거나 연락처 페이지를 통해 문의해 주세요.',
    '수채화': '수채화는 Flora Kim 아티스트가 가장 즐겨 사용하는 기법 중 하나입니다. "식물과 빛의 만남" 강의에서 수채화 심화 기법을 배울 수 있습니다. 투명한 색감과 층을 쌓는 기법으로 식물의 섬세함을 표현합니다.',
    '전시회': '현재 및 예정된 전시회 정보는 전시회 페이지에서 확인하실 수 있습니다. 다음 전시회는 2025년 4월 대전 시립미술관에서 열릴 예정입니다.',
    '연락': '연락처 페이지에서 이메일, 전화번호, 스튜디오 위치 등 다양한 연락 방법을 확인하실 수 있습니다. 강의 및 워크숍 문의도 이 페이지를 통해 가능합니다.',
    '식물 기르기': '식물 기르기에 관심이 있으신가요? Flora Kim 아티스트는 식물 관리에 관한 정보도 공유하고 있습니다. 물주기, 햇빛, 흙 등 궁금한 점을 구체적으로 물어보세요.',
    '그리기': '보태니컬 아트를 시작하고 싶으시다면, 토요일 "보태니컬 일러스트레이션의 기초" 워크숍에 참여해보세요. 초보자도 쉽게 따라할 수 있는 단계별 교육을 제공합니다.',
    '수업': '현재 두 가지 정규 강의가 있습니다: 토요일 초급반(보태니컬 일러스트레이션의 기초)과 금요일 중급반(식물과 빛의 만남). 모든 수업은 소규모로 진행되며 맞춤형 피드백을 제공합니다.',
    '플로라': 'Flora Kim은 서울을 기반으로 활동하는 보태니컬 아티스트로, 자연의 세밀한 아름다움을 담아내는 작업을 15년간 이어오고 있습니다. GPTERS대학교에서 식물학과 시각예술을 전공했으며, 영국 왕립식물원 큐가든에서 보태니컬 일러스트레이션 과정을 수료했습니다.',
    '아티스트': 'Flora Kim은 주로 수채화와 색연필을 사용하여 한국의 토착 식물과 멸종 위기 식물을 세밀하게 기록하는 작업에 중점을 두고 있습니다. "식물은 무한한 인내와 적응력을 가진 존재입니다. 그들의 이야기를 시각적으로 담아내는 것은 인간과 자연의 공존에 대해 깊이 생각하게 합니다."',
    '플로라 김': 'Flora Kim은 과학적 정확성과 예술적 감성의 균형을 추구하는 보태니컬 아티스트입니다. 작품 활동과 함께 다양한 워크숍과 강의를 통해 보태니컬 아트의 대중화에 기여하고 있으며, 식물 관찰법, 색 혼합 기법, 식물의 구조적 이해 등을 체계적으로 가르치고 있습니다.'
  };
  
  // OpenAI API를 사용한 응답 생성
  const generateOpenAIResponse = async (userInput) => {
    try {
      // 시스템 메시지와 이전 대화 기록을 포함한 메시지 배열 생성
      const messageHistory = [
        { 
          role: 'system', 
          content: `당신은 보태니컬 아트 전문 웹사이트의 친절한 안내 챗봇입니다. 특히 식물 그림을 그리는 것에 특화되어 있습니다. 다양한 도구를 쓸 수 있지만 주로 색연필 또는 수채화를 이용합니다. 짧고 간결하게 답변해 주세요. 답변은 최대 5문장으로 제한하고, 핵심 정보만 전달하세요.

아티스트 소개:
Flora Kim은 서울을 기반으로 활동하는 보태니컬 아티스트로, 자연의 세밀한 아름다움을 담아내는 작업을 15년간 이어오고 있습니다. GPTERS대학교에서 식물학과 시각예술을 전공했으며, 영국 왕립식물원 큐가든에서 보태니컬 일러스트레이션 과정을 수료했습니다. 그녀의 작품은 과학적 정확성과 예술적 감성의 균형을 추구하며, 주로 수채화와 색연필을 사용하여 한국의 토착 식물과 멸종 위기 식물을 세밀하게 기록하는 작업에 중점을 두고 있습니다. "식물은 무한한 인내와 적응력을 가진 존재입니다. 그들의 이야기를 시각적으로 담아내는 것은 인간과 자연의 공존에 대해 깊이 생각하게 합니다." 특히 식물 관찰법, 색 혼합 기법, 식물의 구조적 이해와 같은 보태니컬 아트의 핵심 요소들을 쉽고 체계적으로 전달하는 교육 방법론을 개발하여 많은 학생들로부터 호평을 받고 있습니다.

다음은 워크숍과 강의에 관한 정보입니다:

정규 강의:
1. 보태니컬 일러스트레이션의 기초: 매주 토요일 오후 2-5시, 서울 문화센터(강남점), 초급자~중급자 대상, 월 180,000원(재료비 포함)
2. 식물과 빛의 만남: 보태니컬 수채화: 매주 금요일 오전 10시-1시, Flora Bota 스튜디오, 중급자~고급자 대상, 월 220,000원(프리미엄 재료 키트 포함)

특별 워크숍:
1. 장미의 서정: 영국 정원의 장미 그리기: 2025년 6월 15-16일(주말 집중과정), 아티스트 개인 스튜디오, 최대 8명, 280,000원
2. 자연에서 화폭으로: 수목원 스케치 트립: 2025년 5월 11일, 9월 20일(계절별 2회), 국립수목원 및 스튜디오, 최대 6명, 340,000원

모든 강의 및 워크숍에 관한 문의는 연락처 페이지 또는 Contact 페이지를 통해 가능합니다.` 
        }
      ];
      
      // 이전 메시지 최대 10개까지만 포함
      const recentMessages = messages.slice(-10);
      recentMessages.forEach(msg => {
        messageHistory.push({ role: msg.role, content: msg.content });
      });
      
      // 사용자의 현재 입력 추가
      messageHistory.push({ role: 'user', content: userInput });
      
      // OpenAI API 호출
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: messageHistory,
        max_tokens: 300, // 응답 길이 제한
        temperature: 0.7,
      });
      
      // API 응답에서 챗봇 메시지 추출
      return response.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI API 호출 오류:', error);
      return '죄송합니다. 응답 생성에 오류가 발생했습니다. API 키를 확인해 주세요.';
    }
  };
  
  // 메시지 전송 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // 사용자 메시지 추가
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    const userInput = input;
    setInput('');
    
    // 챗봇 타이핑 효과
    setIsTyping(true);
    
    // 응답 생성
    let botResponse = '';
    
    if (isApiKeyValid && openai) {
      // OpenAI API 사용하여 응답 생성
      botResponse = await generateOpenAIResponse(userInput);
    } else {
      // 지연 효과 (API 클라이언트 초기화 실패 시)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 미리 준비된 응답 찾기
      botResponse = '죄송합니다. 환경변수에 유효한 API 키가 설정되지 않았습니다. 대신 간단한 질문에 대해 답변해 드리겠습니다.';
      
      // 키워드 매칭 검사
      for (const keyword in predefinedAnswers) {
        if (userInput.toLowerCase().includes(keyword.toLowerCase())) {
          botResponse = predefinedAnswers[keyword];
          break;
        }
      }
    }
    
    // 챗봇 응답 추가
    const assistantMessage = { role: 'assistant', content: botResponse };
    setMessages(prev => [...prev, assistantMessage]);
    setIsTyping(false);
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* 챗봇 토글 버튼 */}
      <button 
        onClick={toggleChatbot}
        className="bg-sage text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-sage-light transition-colors focus:outline-none"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
      
      {/* 챗봇 창 */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-sage-lightest rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
          {/* 챗봇 헤더 */}
          <div className="bg-sage text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-sage-lightest p-1 rounded-full mr-3">
                <svg className="w-6 h-6 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Flora Bota</h3>
                <p className="text-xs opacity-80">식물과 보태니컬 아트에 관해 물어보세요</p>
              </div>
            </div>
            {!isApiKeyValid && (
              <div className="text-xs text-amber-200 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>API 키 필요</span>
              </div>
            )}
          </div>
          
          {/* API 키 상태 알림 (환경변수에 키가 없을 때) */}
          {!isApiKeyValid && (
            <div className="p-3 bg-amber-50 border-b border-amber-100 text-amber-700 text-sm">
              <p>
                환경변수에 OpenAI API 키가 설정되지 않았습니다. <br/>
                <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">.env.local</code> 파일에 <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">VITE_OPENAI_API_KEY=your-api-key</code> 형식으로 API 키를 설정해 주세요.
              </p>
            </div>
          )}
          
          {/* 메시지 영역 */}
          <div className="flex-1 p-4 overflow-y-auto max-h-80 bg-gray-50">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === 'user' 
                        ? 'bg-sage text-white rounded-br-none' 
                        : 'bg-sage-lightest text-gray-700 shadow-sm rounded-bl-none'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              
              {/* 타이핑 표시 */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg p-3 bg-sage-lightest text-gray-700 shadow-sm rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* 자동 스크롤을 위한 참조 */}
              <div ref={messagesEndRef} />
            </div>
          </div>
          
          {/* 입력 영역 */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4 bg-sage-lightest">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="질문을 입력하세요..."
                className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
              />
              <button 
                type="submit"
                className="bg-sage text-white px-4 py-2 rounded-r-md hover:bg-sage-light transition-colors"
                disabled={isTyping}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14l9-5-9-4-9 4 9 5z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chatbot; 