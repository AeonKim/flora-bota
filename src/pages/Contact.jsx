import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// Contact 컴포넌트: 아티스트에게 연락하고 문의할 수 있는 페이지
function Contact() {
  // 폼 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'general' // 기본값: 일반 문의
  });
  
  // 폼 제출 상태 관리
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    isLoading: false
  });
  
  // 입력 값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // 폼 제출 처리 - 실제 이메일 전송 기능
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 기본적인 유효성 검사
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        submitted: true,
        error: true,
        message: '이름, 이메일, 메시지는 필수 입력 항목입니다.',
        isLoading: false
      });
      return;
    }
    
    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: '유효한 이메일 주소를 입력해주세요.',
        isLoading: false
      });
      return;
    }
    
    // 로딩 상태 시작
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      isLoading: true
    });
    
    try {
      // EmailJS 서비스 설정
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
      
      // 실제 EmailJS 설정이 있는지 확인
      const isEmailJSConfigured = serviceId !== 'service_your_service_id' && 
                                  templateId !== 'template_your_template_id' && 
                                  publicKey !== 'your_public_key';
      
      if (isEmailJSConfigured) {
        // 실제 이메일 전송
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          to_email: 'hust1901@gmail.com',
          subject: formData.subject || `${formData.interest} 문의`,
          message: formData.message,
          interest: formData.interest,
          reply_to: formData.email
        };
        
        const result = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          publicKey
        );
        console.log('이메일 전송 성공:', result.text);
        
        // 성공 메시지 표시
        setFormStatus({
          submitted: true,
          error: false,
          message: `안녕하세요 ${formData.name}님! Flora Bota에게 메시지가 성공적으로 전달되었습니다. 입력해주신 이메일 주소(${formData.email})로 곧 답변이 도착할 예정입니다. 소중한 문의를 주셔서 감사합니다.`,
          isLoading: false
        });
        
        // 폼 초기화
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          interest: 'general'
        });
      } else {
        // 데모 모드 - 2초 지연 후 성공 처리
        console.log('데모 모드: EmailJS 설정이 없어 실제 이메일은 전송되지 않습니다.');
        console.log('전송될 데이터:', templateParams);
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } catch (error) {
      console.error('이메일 전송 실패:', error);
      setFormStatus({
        submitted: true,
        error: true,
        message: '메시지 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
        isLoading: false
      });
    }
  };
  
  return (
    <div className="pt-24 pb-16">
      {/* 헤더 섹션 */}
      <div className="bg-sage/10 py-12" data-aos="fade-up">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-cormorant font-semibold text-sage mb-4">Contact</h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            작품 구매, 전시 제안, 워크숍 문의 등 어떤 내용이든 편하게 연락해 주세요.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* 왼쪽: 문의 양식 */}
          <div className="lg:w-2/3" data-aos="fade-right" data-aos-duration="1000">
            <h2 className="text-3xl font-lora text-gray-800 mb-8">Leave a Message</h2>
            
            {/* 성공/에러 메시지 */}
            {formStatus.submitted && (
              <div className={`mb-6 p-6 rounded-lg border-l-4 ${
                formStatus.error 
                  ? 'bg-red-50 border-red-400 text-red-700' 
                  : 'bg-green-50 border-green-400 text-green-700'
              }`} data-aos="fade-in">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {formStatus.error ? (
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      {formStatus.message}
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* 로딩 상태 표시 */}
            {formStatus.isLoading && (
              <div className="mb-6 p-6 rounded-lg bg-blue-50 border-l-4 border-blue-400" data-aos="fade-in">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="animate-spin w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-blue-700">
                      Flora Bota에게 메시지를 전송하고 있습니다...
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up" data-aos-delay="100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">이름 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">이메일 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="interest" className="block text-gray-700 mb-2">관심 분야</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                >
                  <option value="general">일반 문의</option>
                  <option value="purchase">작품 구매</option>
                  <option value="commission">작품 의뢰</option>
                  <option value="workshop">워크숍/강의 문의</option>
                  <option value="collaboration">협업 제안</option>
                  <option value="other">기타</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">제목</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">메시지 *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sage focus:border-transparent"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={formStatus.isLoading}
                  className={`btn-primary hover-lift ${
                    formStatus.isLoading 
                      ? 'opacity-50 cursor-not-allowed' 
                      : ''
                  }`}
                >
                  {formStatus.isLoading ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      전송 중...
                    </div>
                  ) : (
                    '메시지 보내기'
                  )}
                </button>
              </div>
            </form>
          </div>
          
          {/* 오른쪽: 연락처 정보 및 SNS */}
          <div className="lg:w-1/3" data-aos="fade-left" data-aos-duration="1000">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-lora text-gray-800 mb-5">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-sage-lightest p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">이메일</h4>
                    <a href="mailto:contact@florabota.art" className="text-sage hover:underline">
                      contact@florabota.art
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage-lightest p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">전화</h4>
                    <a href="tel:+82-2-1234-5678" className="text-sage hover:underline">
                      02-1234-5678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-sage-lightest p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">스튜디오 위치</h4>
                    <address className="not-italic text-gray-600">
                      서울시 강남구 지피터스로 123<br />
                      팁스타운 S1 2층
                    </address>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 스튜디오 영업 시간 */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6" data-aos="fade-up" data-aos-delay="150">
              <h3 className="text-xl font-lora text-gray-800 mb-5">Studio Hours</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>월요일 - 금요일:</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>토요일:</span>
                  <span>12:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>일요일:</span>
                  <span>휴무</span>
                </div>
              </div>
            </div>
            
            {/* 소셜 미디어 */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6" data-aos="fade-up" data-aos-delay="250">
              <h3 className="text-xl font-lora text-gray-800 mb-5">Follow Me</h3>
              <p className="text-gray-600 mb-4">
                소셜 미디어에서 작품과 활동을 확인해보세요.
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="transform transition-transform duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <div className="bg-sage p-2.5 rounded-full hover:shadow-md transition-all">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="#"
                  className="transform transition-transform duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <div className="bg-sage p-2.5 rounded-full hover:shadow-md transition-all">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="#"
                  className="transform transition-transform duration-300 hover:scale-110"
                  aria-label="Pinterest"
                >
                  <div className="bg-sage p-2.5 rounded-full hover:shadow-md transition-all">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.218-.937 1.407-5.965 1.407-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                    </svg>
                  </div>
                </a>
                <a
                  href="#"
                  className="transform transition-transform duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <div className="bg-sage p-2.5 rounded-full hover:shadow-md transition-all">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Contact; 