import React from 'react';

// Exhibitions 컴포넌트: 아티스트의 전시회 및 이력을 타임라인 형식으로 표시하는 페이지
function Exhibitions() {
  // 전시회 데이터 (PRD에서 가져온 정보)
  const exhibitionItems = [
    {
      id: 1,
      title: '초대 개인전 "모란 피어오르다"',
      venue: '대전 시립미술관 특별 갤러리',
      date: '2025년 6월',
      isFuture: true,
      description: '동양의 모란과 서양의 피오니를 비교하며 문화적 의미와 식물학적 특성을 예술로 표현한 특별 전시회입니다.',
      image: '/assets/images/exhibition1.png', // 실제 이미지 경로로 대체 필요
    },
    {
      id: 2,
      title: '개인전 "자연의 세밀화"',
      venue: '서울 식물원 갤러리',
      date: '2024년 3월',
      isFuture: false,
      description: '한국의 다양한 자연 환경에서 발견되는 식물들을 세밀화로 기록한 전시회입니다. 산, 강, 바다, 숲 등 다양한 생태계의 식물 다양성을 조명합니다.',
      image: '/assets/images/exhibition2.png', // 실제 이미지 경로로 대체 필요
    },
    {
      id: 3,
      title: '그룹전 "식물과 인간"',
      venue: '국립현대미술관',
      date: '2023년 10월',
      isFuture: false,
      description: '식물과 인간의 관계를 다양한 시각에서 탐구한 그룹 전시회입니다. Flora Kim 작가는 장미와 여성을 주제로 연작을 선보였습니다.',
      image: '/assets/images/exhibition3.png', // 실제 이미지 경로로 대체 필요
    },
    {
      id: 4,
      title: '국제 보태니컬 아트 비엔날레',
      venue: '뉴욕 식물원',
      date: '2022년 5월',
      isFuture: false,
      description: '전 세계 45개국의 보태니컬 아티스트들이 참여한 국제 행사입니다. Flora Kim 작가는 한국의 야생화 시리즈로 주목을 받았습니다.',
      image: '/assets/images/exhibition4.png', // 실제 이미지 경로로 대체 필요
    },
    {
      id: 5,
      title: '기획전 "한국의 야생화 도감"',
      venue: '제주 자연사 박물관',
      date: '2021년 7월',
      isFuture: false,
      description: '제주도의 야생화를 기록하고 보존의 중요성을 알리는 전시회입니다. 과학적 정확성과 예술적 감성이 조화를 이룬 작품들로 구성되었습니다.',
      image: '/assets/images/exhibition5.png', // 실제 이미지 경로로 대체 필요
    },
    {
      id: 6,
      title: '테마전 "프로방스에서 토스카나까지"',
      venue: '이탈리아 피렌체 보태니컬 갤러리',
      date: '2020년 6월',
      isFuture: false,
      description: '프랑스 프로방스와 이탈리아 토스카나 지역의 특징적인 식물상을 담은 국제 테마 전시회입니다. 지중해성 기후 식물에 대한 새로운 시각을 제시했습니다.',
      image: '/assets/images/exhibition6.png', // 실제 이미지 경로로 대체 필요
    },
    {
      id: 7,
      title: '그룹전 "로얄 보태니컬 가든스"',
      venue: '영국 왕립 식물원 갤러리',
      date: '2019년 5월',
      isFuture: false,
      description: '영국 왕립 식물원의 역사적 컬렉션에서 영감을 받은 현대 보태니컬 아트 작품들을 선보인 전시회입니다. 전통과 현대의 조화를 주제로 했습니다.',
      image: '/assets/images/exhibition7.png', // 실제 이미지 경로로 대체 필요
    },
    {
      id: 8,
      title: '초청전 "한국의 계절, 꽃의 시간"',
      venue: '서울 가나아트센터',
      date: '2018년 9월',
      isFuture: false,
      description: '한국의 사계절을 대표하는 꽃들을 주제로 한 초청 전시회입니다. 계절의 변화에 따른 자연의 순환과 아름다움을 담았습니다.',
      image: '/assets/images/exhibition8.png', // 실제 이미지 경로로 대체 필요
    }
  ];
  
  return (
    <div className="pt-24 pb-16">
      {/* 헤더 섹션 */}
      <div className="bg-sage/10 py-12" data-aos="fade-up">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-cormorant font-semibold text-sage mb-4">Exhibitions & History</h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Flora Kim 아티스트의 전시회 활동과 예술적 성과를 살펴보세요.
          </p>
        </div>
      </div>
      
      {/* 타임라인 섹션 */}
      <div className="container-custom py-16">
        {/* 예정된 전시회 섹션 */}
        {exhibitionItems.some(item => item.isFuture) && (
          <div className="mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-montserrat text-center mb-10 text-gray-800">
            Upcoming Exhibitions
            </h2>
            
            <div className="grid grid-cols-1 gap-8">
              {exhibitionItems
                .filter(item => item.isFuture)
                .map((exhibition, index) => (
                  <div 
                    key={exhibition.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-sage"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute top-0 right-0 bg-sage text-white py-1 px-3 rounded-bl-lg z-10">
                        곧 공개
                      </div>
                      <img 
                        src={exhibition.image} 
                        alt={exhibition.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-lora text-xl text-gray-800 mb-2">{exhibition.title}</h3>
                      <div className="flex justify-between text-gray-600 mb-4">
                        <span>{exhibition.venue}</span>
                        <span className="font-medium text-sage">{exhibition.date}</span>
                      </div>
                      <p className="text-gray-600">{exhibition.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
        
        {/* 타임라인 */}
        <h2 className="text-3xl font-montserrat text-center mb-10 text-gray-800" data-aos="fade-up">
        Exhibition History
        </h2>
        
        <div className="relative">
          {/* 타임라인 중앙선 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sage/20"></div>
          
          {/* 타임라인 항목들 */}
          <div className="space-y-12">
            {exhibitionItems
              .filter(item => !item.isFuture)
              .map((exhibition, index) => (
                <div 
                  key={exhibition.id} 
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 100}
                >
                  {/* 날짜 마커 (중앙) */}
                  <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex flex-col items-center md:w-auto z-10">
                    <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center mb-2">
                      <div className="w-6 h-6 bg-sage-lightest rounded-full"></div>
                    </div>
                    <span className="bg-sage text-white py-1 px-3 rounded-full text-sm font-medium">
                      {exhibition.date}
                    </span>
                  </div>
                  
                  {/* 콘텐츠 */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={exhibition.image} 
                          alt={exhibition.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-lora text-xl text-gray-800 mb-2">{exhibition.title}</h3>
                        <p className="text-gray-600 mb-4">{exhibition.venue}</p>
                        <p className="text-gray-600">{exhibition.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 빈 공간 (반대편) */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exhibitions; 