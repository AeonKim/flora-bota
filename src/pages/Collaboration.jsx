import React from 'react';
import { Link } from 'react-router-dom';

// Collaboration 컴포넌트: 협업 및 의뢰에 관한 정보를 제공하는 페이지
function Collaboration() {
  // 협업 가능 분야 데이터
  const collaborationFields = [
    {
      title: '출판 일러스트레이션',
      description: '식물학 서적, 동식물 도감, 원예 잡지, 요리책 등 다양한 출판물을 위한 보태니컬 일러스트레이션을 제작합니다.',
      icon: (
        <svg className="w-12 h-12 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: '상품 디자인',
      description: '패브릭, 벽지, 문구류, 도자기, 홈 인테리어 제품 등 다양한 상품을 위한 식물 모티프 디자인을 제작합니다.',
      icon: (
        <svg className="w-12 h-12 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: '브랜드 콜라보레이션',
      description: '식물, 자연, 지속 가능성을 주제로 하는 브랜드와의 협업을 통해 특별한 아트워크와 시각적 콘텐츠를 제작합니다.',
      icon: (
        <svg className="w-12 h-12 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: '맞춤형 아트워크',
      description: '개인이나 기업을 위한 특별한 선물, 기념품, 장식용 보태니컬 작품을 의뢰에 맞춰 제작합니다.',
      icon: (
        <svg className="w-12 h-12 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: '교육 콘텐츠',
      description: '보태니컬 아트 교육을 위한 교재, 온라인 강의 자료, 워크숍 커리큘럼 등 교육 콘텐츠를 개발합니다.',
      icon: (
        <svg className="w-12 h-12 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: '전시 및 설치 미술',
      description: '갤러리, 박물관, 식물원, 공공 공간 등을 위한 보태니컬 아트 전시 및 설치 작품을 기획하고 제작합니다.',
      icon: (
        <svg className="w-12 h-12 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];
  
  // 가격 정책 데이터
  const pricingPlans = [
    {
      title: '단일 작품',
      description: '개인 소장용 또는 특별한 선물을 위한 단일 보태니컬 아트 작품',
      priceRange: '500,000원 ~ 1,500,000원',
      features: [
        '맞춤형 보태니컬 아트 작품 1점',
        '작품 크기에 따라 가격 차등 적용',
        '기본 프레임 포함 옵션',
        '작품 의도 및 식물학적 설명 제공',
        '원본 작품 배송 (국내 무료)'
      ],
      isPopular: false
    },
    {
      title: '시리즈 작품',
      description: '관련 주제로 구성된 3-5점의 보태니컬 아트 시리즈',
      priceRange: '1,200,000원 ~ 3,000,000원',
      features: [
        '동일한 테마로 구성된 3-5점의 시리즈 작품',
        '작품 크기와 수량에 따라 가격 차등 적용',
        '시리즈 콘셉트 및 스토리텔링 개발',
        '통일된 프레임 세트 옵션',
        '전시 배치 가이드 제공'
      ],
      isPopular: true
    },
    {
      title: '상업적 사용',
      description: '출판, 제품 디자인, 상업적 용도를 위한 보태니컬 일러스트레이션',
      priceRange: '문의 필요',
      features: [
        '상업적 사용 라이센스 포함',
        '다양한 형식의 디지털 파일 제공',
        '사용 범위와 기간에 따른 가격 책정',
        '추가 수정 및 포맷 변환 지원',
        '전문적인 컨설팅 및 조언 제공'
      ],
      isPopular: false
    }
  ];
  
  return (
    <div className="pt-24 pb-16">
      {/* 헤더 섹션 */}
      <div className="bg-sage/10 py-12" data-aos="fade-up">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-cormorant font-semibold text-sage mb-4">Collaboration</h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
          다양한 분야에서 보태니컬 아트의 아름다움을 담은 특별한 프로젝트를 함께 만들어보세요.
          </p>
        </div>
      </div>
      
      {/* 협업 가능 분야 섹션 */}
      <div className="container-custom py-16" data-aos="fade-up">
        <h2 className="text-3xl font-montserrat text-center text-gray-800 mb-12">Collaboration Areas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborationFields.map((field, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {field.icon}
                </div>
                <h3 className="text-xl font-lora text-gray-800 mb-3">{field.title}</h3>
                <p className="text-gray-600">{field.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* 가격 정책 섹션 */}
      <div className="container-custom py-16" data-aos="fade-up">
        <h2 className="text-3xl font-montserrat text-center text-gray-800 mb-6">Pricing Guide</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          프로젝트의 성격과 요구 사항에 따라 가격이 다를 수 있습니다. 아래는 참고용 가격 범위이며, 정확한 견적은 상담 후 제공해 드립니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-sm p-6 relative ${plan.isPopular ? 'border-2 border-sage' : 'border border-gray-200'}`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-sage text-white py-1 px-3 rounded-bl-lg">
                  인기 옵션
                </div>
              )}
              
              <h3 className="text-xl font-lora text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              
              <div className="font-semibold text-xl text-sage mb-6">{plan.priceRange}</div>
              
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-sage mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact" 
                className={`block text-center ${
                  plan.isPopular 
                    ? 'btn-primary hover-lift' 
                    : 'btn-secondary hover-lift'
                }`}
              >
                문의하기
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA 섹션 */}
      <div className="bg-sage/10 py-16" data-aos="fade-up">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-montserrat text-gray-800 mb-6">Start Your Project</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            멋진 아이디어가 있으신가요? 부담 없이 연락해 주세요. 여러분의 비전을 실현하기 위한 첫 단계를 함께 시작해보세요.
          </p>
          <Link 
            to="/contact" 
            className="btn-primary hover-lift"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            문의하기
          </Link>
        </div>
      </div>
      
      {/* 자주 묻는 질문 섹션 */}
      <div className="container-custom py-16" data-aos="fade-up">
        <h2 className="text-3xl font-montserrat text-center text-gray-800 mb-12">FAQ</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl font-medium text-gray-800 mb-3">작업 기간은 얼마나 소요되나요?</h3>
            <p className="text-gray-600">
              작품의 크기, 복잡도, 현재 작업량에 따라 달라지지만, 일반적으로 단일 작품은 2-4주, 시리즈 작품은 1-3개월이 소요됩니다. 상업적 프로젝트의 경우, 프로젝트의 규모와 마감 일정에 따라 조율 가능합니다. 급한 작업이 필요한 경우 별도로 문의해 주세요.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-medium text-gray-800 mb-3">특정 식물이나 주제를 요청할 수 있나요?</h3>
            <p className="text-gray-600">
              네, 특정 식물이나 주제에 대한 작품을 의뢰하실 수 있습니다. 희귀식물, 특별한 꽃, 가족의 정원에 있는
              식물 등 원하시는 소재를 알려주시면 가능한 한 요청에 맞춰 작업해 드립니다. 다만, 일부 매우 희귀한 식물의 경우 참고 자료가 필요할 수 있습니다.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6" data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-medium text-gray-800 mb-3">수정 요청은 어떻게 할 수 있나요?</h3>
            <p className="text-gray-600">
              초안 단계에서 2회의 수정이 기본적으로 포함되어 있습니다. 수정 요청은 최대한 구체적으로 해주시면 정확하게 반영해 드릴 수 있습니다. 2회를 초과하는 추가 수정은 별도의 비용이 발생할 수 있으며, 작업 범위가 크게 변경되는 경우 추가 견적이 필요할 수 있습니다.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6" data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-medium text-gray-800 mb-3">작품의 저작권은 어떻게 되나요?</h3>
            <p className="text-gray-600">
              개인 소장용 작품의 경우, 작품의 원본과 이미지 사용 권한은 구매자에게 있지만, 포트폴리오 등에 작품을 게시할 수 있는 권한은 작가가 보유합니다. 상업적 사용의 경우, 계약 내용에 따라 저작권 범위와 기간이 결정됩니다. 모든 저작권 사항은 계약서에 명시되므로 의뢰 전 충분한 상담을 통해 결정하게 됩니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaboration; 