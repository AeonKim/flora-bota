import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

// 홈페이지 컴포넌트: 웹사이트의 첫 화면으로 주요 콘텐츠와 링크를 표시
function Home() {
  // 하이라이트 갤러리 아이템 데이터 (실제 구현 시 외부 데이터로 대체 가능)
  const highlightItems = [
    {
      id: 1,
      title: '모란',
      image: '/assets/images/highlight1.png', // 실제 이미지 경로로 대체 필요
      category: '수채화',
      year: '2024'
    },
    {
      id: 2,
      title: '피어오르다',
      image: '/assets/images/highlight2.png', // 실제 이미지 경로로 대체 필요
      category: '색연필',
      year: '2023'
    },
    {
      id: 3,
      title: '한국의 야생화',
      image: '/assets/images/highlight3.png', // 실제 이미지 경로로 대체 필요
      category: '혼합 매체',
      year: '2022'
    }
  ];

  // 뉴스 데이터 (실제 구현 시 외부 데이터로 대체 가능)
  const newsItems = [
    {
      id: 1,
      title: '초대 개인전 "모란과 피어오르다" 개최 예정',
      date: '2025년 4월',
      venue: '대전 시립미술관 특별 갤러리'
    },
    {
      id: 2,
      title: '신규 워크숍 "장미의 서정" 접수 시작',
      date: '2025년 6월 15-16일',
      venue: '아티스트 개인 스튜디오'
    }
  ];

  return (
    <div className="bg-cream">
      {/* 히어로 섹션 */}
      <HeroSection />
      
      {/* 하이라이트 갤러리 섹션 */}
      <section 
        className="py-24 bg-white"
        data-aos="fade-up"
      >
        <div className="container-custom">
          <h2 className="section-title">
            <span className="font-montserrat">Portfolio Highlights</span>
          </h2>
          
          <div className="grid-gallery mt-16">
            {highlightItems.map((item, index) => (
              <div 
                key={item.id} 
                className="card-highlight group hover-lift"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="relative overflow-hidden h-72">
                  <div className="absolute inset-0 bg-sage-lightest/50 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-sage px-3 py-1 rounded-full text-sm font-medium">
                    {item.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-lora text-2xl text-charcoal mb-2 group-hover:text-sage transition-colors duration-300">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-charcoal-light font-medium">{item.category}</span>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-14" data-aos="fade-up" data-aos-delay="200">
            <Link to="/portfolio" className="btn-primary hover-lift">
              모든 작품 보기
            </Link>
          </div>
        </div>
      </section>
      
      {/* 뉴스 배너 섹션 */}
      <section 
        className="py-24 bg-cream"
        data-aos="fade-up"
      >
        <div className="container-custom">
          <h2 className="section-title">
            <span className="font-montserrat">What's New</span>
          </h2>
          
          <div className="space-y-6 mt-14">
            {newsItems.map((news, index) => (
              <div 
                key={news.id} 
                className="bg-white p-8 rounded-xl shadow-elegant hover:shadow-card transition-all duration-400 transform hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <h3 className="font-lora text-2xl text-charcoal mb-3 relative inline-block">
                  {news.title}
                  <span className="absolute -bottom-1 left-0 w-1/3 h-[2px] bg-sage-light"></span>
                </h3>
                <div className="flex flex-col sm:flex-row sm:justify-between text-charcoal-light">
                  <span className="font-medium inline-flex items-center gap-2">
                    <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {news.date}
                  </span>
                  <span className="inline-flex items-center gap-2 mt-2 sm:mt-0">
                    <svg className="w-4 h-4 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {news.venue}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="200">
            <Link to="/exhibitions" className="btn-secondary hover-lift">
              모든 소식 보기
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA 섹션 */}
      <section 
        className="py-24 bg-gradient-to-r from-sage-lightest via-sage-lighter to-sage-lightest relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* 장식 요소 */}
        <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-sage/10 backdrop-blur-sm"></div>
        <div className="absolute right-10 bottom-32 w-24 h-24 rounded-full bg-gold-lightest/30 backdrop-blur-sm"
          style={{ animation: 'floatIn 7s infinite ease-in-out' }}
        ></div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="section-title">
            <span className="font-montserrat">Work With Me</span>
          </h2>
          <p className="paragraph max-w-2xl mx-auto mb-10 text-lg" data-aos="fade-up" data-aos-delay="100">
            출판, 제품 디자인, 벽화 등 다양한 분야에서 협업이 가능합니다.
            특별한 보태니컬 아트 작품이 필요하시다면 언제든 연락해주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link to="/collaboration" className="btn-primary hover-lift">
              협업 및 의뢰 안내
            </Link>
            <Link to="/contact" className="btn-secondary hover-lift">
              연락하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 