import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Workshops 컴포넌트: 아티스트가 진행하는 강의와 워크숍 정보를 표시하는 페이지
function Workshops() {
  // 탭 상태 관리
  const [activeTab, setActiveTab] = useState('regular');
  
  // 정규 강의 데이터
  const regularClasses = [
    {
      id: 1,
      title: '보태니컬 일러스트레이션의 기초',
      schedule: '매주 토요일 오후 2-5시',
      location: '서울 문화센터 (강남점)',
      level: '초급자~중급자',
      price: '월 180,000원 (재료비 포함)',
      content: '식물 관찰법, 연필 드로잉, 수채화 기법, 색연필 활용법',
      image: '/assets/images/workshop1.png', // 실제 이미지 경로로 대체 필요
      details: [
        '식물을 정확하게 관찰하고 구조를 이해하는 방법',
        '연필을 사용한 기본 드로잉 기술',
        '수채화의 기본 기법과 식물 표현법',
        '색연필을 활용한 세밀화 기법',
        '작품 완성 및 프레젠테이션 방법',
        '식물의 계절적 변화와 생장 과정 기록 방법'
      ]
    },
    {
      id: 2,
      title: '식물과 빛의 만남: 보태니컬 수채화',
      schedule: '매주 금요일 오전 10시-1시',
      location: 'Flora Bota 스튜디오',
      level: '중급자~고급자',
      price: '월 220,000원 (프리미엄 재료 키트 포함)',
      content: '식물의 투명감과 질감 표현, 빛과 그림자의 이해, 층 구조 수채화 기법, 식물 고유의 색감 포착 방법',
      image: '/assets/images/workshop2.png', // 실제 이미지 경로로 대체 필요
      details: [
        '식물의 투명감과 질감을 사실적으로 표현하는 고급 기법',
        '빛과 그림자의 효과적인 표현 방법',
        '여러 층을 쌓아올리는 수채화 기법 마스터하기',
        '식물의 고유한 색감을 정확히 포착하고 표현하는 방법',
        '작품의 완성도를 높이는 디테일 작업법'
      ]
    }
  ];
  
  // 특별 워크숍 데이터
  const specialWorkshops = [
    {
      id: 1,
      title: '장미의 서정: 영국 정원의 장미 그리기',
      date: '2025년 6월 15-16일 (주말 집중과정)',
      location: '아티스트 개인 스튜디오',
      capacity: '최대 8명 소수정예',
      price: '280,000원 (모든 재료 제공, 애프터눈 티 타임 포함)',
      content: '영국 왕립 식물원의 장미 품종 연구, 장미의 섬세한 꽃잎 구조 분석, 수채화로 표현하는 다양한 장미 색감, 식물학적 정확성과 예술적 표현의 균형',
      image: '/assets/images/workshop3.png', // 실제 이미지 경로로 대체 필요
      details: [
        '영국 왕립 식물원에서 재배되는 다양한 장미 품종의 역사와 특징',
        '장미 꽃잎의 복잡한 구조와 질감을 관찰하고 분석하는 방법',
        '장미의 다양한 색상과 미묘한 색감 변화를 수채화로 표현하는 기법',
        '식물학적 정확성을 유지하면서도 예술적 감성을 더하는 방법',
        '완성된 장미 작품을 포트폴리오에 효과적으로 추가하는 팁'
      ],
      isPopular: true
    },
    {
      id: 2,
      title: '자연에서 화폭으로: 수목원 스케치 트립',
      date: '2025년 5월 11일, 9월 20일 (계절별 2회 운영)',
      location: '국립수목원 (1일차), 아티스트 스튜디오 (2일차)',
      capacity: '최대 6명 심화 그룹',
      price: '340,000원 (전문 가이드 투어, 모든 재료, 중식 포함)',
      content: '첫째 날은 수목원 전문가의 가이드와 함께 식물 탐방 및 현장 스케치, 둘째 날은 스튜디오에서 수집한 자료를 바탕으로 완성작 제작. 식물의 자연 서식지 관찰에서 보태니컬 작품으로의 변환 과정을 경험하는 몰입형 창작 워크숍',
      image: '/assets/images/workshop4.png', // 실제 이미지 경로로 대체 필요
      details: [
        '현장에서 식물을 효과적으로 관찰하고 기록하는 방법',
        '야외 스케치 시 주의해야 할 점과 빠르게 정확한 스케치를 하는 기술',
        '현장에서 수집한 참고 자료(스케치, 사진, 메모)를 활용해 스튜디오에서 작품을 완성하는 과정',
        '식물의 자연스러운 형태와 환경적 맥락을 작품에 반영하는 방법',
        '계절에 따른 식물의 변화와 특징을 표현하는 기법'
      ],
      isNew: true
    }
  ];
  
  return (
    <div className="pt-24 pb-16">
      {/* 헤더 섹션 */}
      <div className="bg-sage/10 py-12" data-aos="fade-up">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-cormorant font-semibold text-sage mb-4">Workshops</h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            다양한 수준의 강의와 특별 워크숍을 통해 보태니컬 아트의 즐거움을 경험하세요.
          </p>
        </div>
      </div>
      
      {/* 탭 메뉴 */}
      <div className="container-custom mt-12" data-aos="fade-up" data-aos-delay="100">
        <div className="flex justify-center border-b border-gray-200">
          <button
            className={`py-4 px-6 font-montserrat font-medium text-lg border-b-2 transition-colors ${
              activeTab === 'regular' 
                ? 'border-sage text-sage' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('regular')}
          >
            Regular Classes
          </button>
          <button
            className={`py-4 px-6 font-montserrat font-medium text-lg border-b-2 transition-colors ${
              activeTab === 'special' 
                ? 'border-sage text-sage' 
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('special')}
          >
            Special Workshops
          </button>
        </div>
      </div>
      
      {/* 정규 강의 콘텐츠 */}
      {activeTab === 'regular' && (
        <div className="container-custom py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {regularClasses.map((course, index) => (
              <div 
                key={course.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden" 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className="relative h-60">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-lora text-2xl text-gray-800 mb-3">{course.title}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-sage mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{course.schedule}</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-sage mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{course.location}</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-sage mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-sage mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">{course.price}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-700 mb-2">교육 내용</h4>
                    <p className="text-gray-600">{course.content}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="font-medium text-gray-700 mb-2">상세 커리큘럼</h4>
                    <ul className="space-y-1">
                      {course.details.map((detail, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <span className="text-sage mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link 
                      to="/contact" 
                      className="btn-primary hover-lift"
                    >
                      수강 문의하기
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* 특별 워크숍 콘텐츠 */}
      {activeTab === 'special' && (
        <div className="container-custom py-12">
          <div className="space-y-12">
            {specialWorkshops.map((workshop, index) => (
              <div 
                key={workshop.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden" 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className="lg:flex">
                  <div className="lg:w-1/3">
                    <div className="relative h-full">
                      {workshop.isPopular && (
                        <div className="absolute top-0 left-0 bg-lavender text-white py-1 px-3 rounded-br-lg z-10">
                          인기 워크숍
                        </div>
                      )}
                      {workshop.isNew && (
                        <div className="absolute top-0 left-0 bg-gold text-white py-1 px-3 rounded-br-lg z-10">
                          신규 개설
                        </div>
                      )}
                      <img 
                        src={workshop.image} 
                        alt={workshop.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-6 lg:p-8">
                    <h3 className="font-lora text-2xl text-gray-800 mb-4">{workshop.title}</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-sage mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-sage mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{workshop.location}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-sage mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span>{workshop.capacity}</span>
                      </div>
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-sage mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">{workshop.price}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-700 mb-2">워크숍 내용</h4>
                      <p className="text-gray-600">{workshop.content}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="font-medium text-gray-700 mb-2">이런 것을 배웁니다</h4>
                      <ul className="space-y-1">
                        {workshop.details.map((detail, index) => (
                          <li key={index} className="flex items-start text-gray-600">
                            <span className="text-sage mr-2">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-center lg:justify-start space-x-4">
                      <Link 
                        to="/contact" 
                        className="btn-primary hover-lift"
                      >
                        신청하기
                      </Link>
                      <button className="btn-secondary hover-lift">
                        상세 일정 보기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* FAQ 섹션 */}
      <div className="container-custom py-16 mt-8">
        <h2 className="text-3xl font-montserrat text-center mb-10 text-gray-800">FAQ</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-xl text-gray-800 mb-2">강의는 어떤 레벨부터 참여할 수 있나요?</h3>
              <p className="text-gray-600">완전 초보자부터 참여 가능합니다. '보태니컬 일러스트레이션의 기초' 강의는 그림 경험이 전혀 없는 분들도 참여 가능하도록 기초부터 차근차근 진행됩니다.</p>
            </div>
            <div>
              <h3 className="font-medium text-xl text-gray-800 mb-2">준비물은 어떻게 되나요?</h3>
              <p className="text-gray-600">정규 강의와 특별 워크숍 모두 재료가 포함되어 있습니다. 필요한 모든 재료와 도구를 제공해 드리니 빈 손으로 오셔도 됩니다. 다만, 개인적으로 사용하던 도구가 있다면 가져오셔도 좋습니다.</p>
            </div>
            <div>
              <h3 className="font-medium text-xl text-gray-800 mb-2">수강 신청은 어떻게 하나요?</h3>
              <p className="text-gray-600">문의하기 페이지를 통해 관심 있는 강의나 워크숍 이름과 함께 연락처를 남겨주시면 24시간 이내에 상세 안내와 함께 연락을 드립니다. 특별 워크숍의 경우 선착순으로 마감될 수 있으니 서둘러 신청해 주세요.</p>
            </div>
            <div>
              <h3 className="font-medium text-xl text-gray-800 mb-2">환불 정책은 어떻게 되나요?</h3>
              <p className="text-gray-600">정규 강의는 개강 7일 전까지 전액 환불, 3일 전까지 50% 환불이 가능합니다. 특별 워크숍의 경우 14일 전까지 전액 환불, 7일 전까지 50% 환불이 가능합니다. 자세한 환불 정책은 신청 시 안내해 드립니다.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workshops; 