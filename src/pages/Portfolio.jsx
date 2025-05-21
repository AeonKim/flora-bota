import { useState } from 'react';

// Portfolio 컴포넌트: 아티스트의 작품 갤러리를 표시하는 페이지
function Portfolio() {
  // 카테고리 필터링을 위한 상태
  const [activeCategory, setActiveCategory] = useState('all');
  
  // 포트폴리오 작품 데이터 (실제 구현 시 외부 데이터로 대체 가능)
  const portfolioItems = [
    {
      id: 1,
      title: '모란',
      category: 'Watercolor',
      image: '/assets/images/portfolio1.png', // 실제 이미지 경로로 대체 필요
      medium: '수채화, 아르쉬지',
      size: '50cm x 65cm',
      year: '2024',
      description: '한국 전통 문화에서 부와 명예의 상징인 모란을 동양적 감성으로 표현한 작품입니다. 섬세한 붓 터치와 은은한 색감으로 모란의 우아함과 풍요로움을 담아냈습니다.'
    },
    {
      id: 2,
      title: '피어오르다',
      category: 'Colored Pencil',
      image: '/assets/images/portfolio2.png', // 실제 이미지 경로로 대체 필요
      medium: '색연필, 코튼지',
      size: '40cm x 55cm',
      year: '2023',
      description: '서양 정원의 대표적인 꽃인 피오니를 현대적 시각으로 재해석한 작품입니다. 색연필의 정교한 레이어링 기법을 통해 피오니 꽃잎의 풍부한 질감과 깊이감을 표현했습니다.'
    },
    {
      id: 3,
      title: '한국의 야생화',
      category: 'Mixed Media',
      image: '/assets/images/portfolio3.png', // 실제 이미지 경로로 대체 필요
      medium: '수채화, 색연필, 아르쉬지',
      size: '45cm x 60cm',
      year: '2022',
      description: '환경 변화로 사라져가는 한국의 야생화를 기록하는 시리즈의 일부입니다. 과학적 정확성을 유지하면서도 식물의 섬세한 아름다움을 포착하기 위해 수채화와 색연필을 혼합한 기법을 사용했습니다.'
    },
    {
      id: 4,
      title: '단풍',
      category: 'Watercolor',
      image: '/assets/images/portfolio4.png', // 실제 이미지 경로로 대체 필요
      medium: '수채화, 아르쉬지',
      size: '60cm x 80cm (4장 세트)',
      year: '2023',
      description: '하나의 단풍나무가 계절에 따라 변화하는 모습을 담은 4부작 작품입니다. 같은 구도에서 계절별로 달라지는 색감과 질감을 섬세하게 표현하여 시간의 흐름과 자연의 순환을 담아냈습니다.'
    },
    {
      id: 5,
      title: '허브 가든',
      category: 'Colored Pencil',
      image: '/assets/images/portfolio5.png', // 실제 이미지 경로로 대체 필요
      medium: '색연필, 코튼지',
      size: '35cm x 50cm (6장 세트)',
      year: '2021',
      description: '한국의 전통 의학에서 활용되어온 토착 허브 식물들을 기록한 시리즈입니다. 식물의 약용적 특성을 강조하기 위해 뿌리부터 꽃까지 식물의 전체 구조를 세밀하게 묘사했습니다.'
    },
    {
      id: 6,
      title: '정원의 은밀한 방문객',
      category: 'Mixed Media',
      image: '/assets/images/portfolio6.png', // 실제 이미지 경로로 대체 필요
      medium: '수채화, 과슈, 금박, 아르쉬지',
      size: '70cm x 90cm',
      year: '2024',
      description: '식물과 곤충의 공생 관계를 탐구한 작품으로, 화려한 정원 식물들과 그 속에 숨어 사는 작은 방문객들(나비, 벌, 딱정벌레 등)의 상호작용을 담았습니다. 전통적인 보태니컬 아트에 현대적 요소를 더한 실험적 작품입니다.'
    }
  ];
  
  // 카테고리 필터링
  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);
  
  // 카테고리 목록 (중복 제거)
  const categories = ['all', ...new Set(portfolioItems.map(item => item.category))];
  
  // 작품 상세 정보 모달
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  // 작품 클릭 시 상세 정보 모달 표시
  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
    // 모달 오픈 시 스크롤 방지
    document.body.style.overflow = 'hidden';
  };
  
  // 모달 닫기
  const closeModal = () => {
    setShowModal(false);
    // 모달 닫을 때 스크롤 복원
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="pt-24 pb-16">
      {/* 헤더 섹션 */}
      <div className="bg-sage/10 py-12" data-aos="fade-up">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-cormorant font-semibold text-sage mb-4">Portfolio</h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            자연의 세밀한 아름다움을 담아낸 보태니컬 아트 작품 컬렉션입니다.
          </p>
        </div>
      </div>
      
      {/* 카테고리 필터 */}
      <div className="container-custom py-8" data-aos="fade-up" data-aos-delay="100">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`transform transition-transform duration-300 ${
                activeCategory === category 
                  ? 'btn-primary' 
                  : 'btn-secondary'
              }`}
              style={{ 
                transition: "all 0.3s ease", 
                position: "relative"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              onClick={() => setActiveCategory(category)}
              data-aos="fade-up"
              data-aos-delay={100 + (index * 50)}
            >
              <span className="font-montserrat">{category === 'all' ? 'All' : category}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* 갤러리 */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="card group cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => openModal(item)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden h-64 md:h-72">
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 rounded-full bg-sage/70 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    자세히 보기
                  </span>
                </div>
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4">
                <h3 className="font-lora text-xl text-gray-800 mb-2">{item.title}</h3>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{item.category}</span>
                  <span>{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* 결과가 없을 경우 */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16" data-aos="fade-up">
            <p className="text-gray-600 mb-4">선택한 카테고리의 작품이 없습니다.</p>
            <button 
              className="btn-primary transform transition-transform duration-300"
              style={{ 
                transition: "all 0.3s ease", 
                position: "relative"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              onClick={() => setActiveCategory('all')}
            >
              All Works
            </button>
          </div>
        )}
      </div>
      
      {/* 작품 상세 모달 */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* 배경 오버레이 */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* 모달 콘텐츠 */}
          <div className="relative bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-auto">
            {/* 닫기 버튼 */}
            <button 
              className="absolute right-4 top-4 z-10 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row">
              {/* 이미지 */}
              <div className="md:w-1/2">
                <img 
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* 상세 정보 */}
              <div className="md:w-1/2 p-6 md:p-8">
                <h2 className="font-lora text-2xl md:text-3xl font-medium text-gray-800 mb-2">
                  {selectedItem.title}
                </h2>
                <p className="text-sage mb-4">{selectedItem.category}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-medium text-gray-700 font-lora">재료</h3>
                    <p>{selectedItem.medium}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700 font-lora">크기</h3>
                    <p>{selectedItem.size}</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700 font-lora">제작 연도</h3>
                    <p>{selectedItem.year}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-medium text-gray-700 mb-2 font-lora">작품 설명</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedItem.description}</p>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="#contact" 
                    className="btn-primary transform transition-transform duration-300"
                    style={{ 
                      transition: "all 0.3s ease", 
                      position: "relative"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                    onClick={(e) => {
                      e.preventDefault();
                      closeModal();
                      window.location.href = '/contact';
                    }}
                  >
                    작품 문의하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio; 