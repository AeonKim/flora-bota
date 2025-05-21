import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// 히어로 섹션 컴포넌트: 웹사이트 상단에 표시되는 세련된 배경과 주요 메시지를 포함
function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 페이지 로드 시 애니메이션 효과 적용
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden">
      {/* 세련된 배경 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 메인 그래디언트 배경 */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-sage/90 via-lavender-lightest/80 to-sage-lightest/90"
          style={{
            backgroundSize: '200% 200%',
            animation: 'simpleGradient 12s ease infinite'
          }}
        ></div>
        
        {/* 식물 패턴 오버레이 */}
        <div className="absolute inset-0 leaf-pattern opacity-20"></div>
        
        {/* 부드러운 메쉬 효과 */}
        <div className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(125, 157, 116, 0.9) 0%, transparent 80%),
              radial-gradient(circle at 70% 65%, rgba(247, 116, 243, 0.9) 0%, transparent 80%)
            `,
            filter: 'blur(60px)'
          }}
        ></div>
        
        {/* 배경 장식 요소 */}
        <div className="absolute right-10 top-1/4 w-32 h-32 rounded-full bg-gold-lightest/20 backdrop-blur-3xl"
          style={{ animation: 'subtlePulse 8s infinite ease-in-out' }}
        ></div>
        <div className="absolute left-12 bottom-1/4 w-24 h-24 rounded-full bg-terracotta-lightest/20 backdrop-blur-3xl"
          style={{ animation: 'subtlePulse 7s infinite ease-in-out 1s' }}
        ></div>
        
        {/* 텍스트 가독성을 위한 미묘한 오버레이 */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]"></div>
      </div>
      
      {/* 콘텐츠 */}
      <div className={`relative z-10 text-center px-4 max-w-4xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-semibold text-charcoal mb-6 text-shadow-lg">
          <span className="relative inline-block">
            Flora <span className="text-sage">Bota</span>
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-sage-light to-transparent"></span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-lora text-charcoal/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          자연의 세밀한 아름다움을 담는 보태니컬 아티스트 Flora Kim의 스튜디오에 오신 것을 환영합니다
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/portfolio" className="btn-primary btn-round hover-lift">
            작품 보기
          </Link>
          <Link to="/contact" className="btn-secondary btn-round hover-lift">
            연락하기
          </Link>
        </div>
        
        {/* 특별 장식 요소 */}
        <div className="absolute -left-10 -bottom-10 w-40 h-40 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-sage">
            <path fill="currentColor" d="M38.3,-52.9C47.4,-40.6,51.1,-26.1,55.5,-11.2C59.9,3.8,65,19.2,60.6,31.1C56.2,43,42.4,51.5,28.3,58.3C14.2,65.2,-0.2,70.5,-15.2,68.5C-30.3,66.5,-45.9,57.2,-55.8,43.8C-65.7,30.4,-69.8,12.9,-67.7,-3.1C-65.5,-19.1,-57.2,-33.7,-45.8,-45.8C-34.4,-57.9,-19.9,-67.6,-3.7,-63.6C12.5,-59.5,29.2,-65.3,38.3,-52.9Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="absolute -right-10 -top-16 w-48 h-48 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-lavender">
            <path fill="currentColor" d="M47.7,-57.2C59,-47.3,63.6,-29.7,67.4,-11.1C71.3,7.5,74.3,27.2,65.8,38.3C57.3,49.5,37.3,52.2,19.2,57.9C1.1,63.6,-15.2,72.3,-27.8,67.7C-40.5,63.1,-49.5,45.1,-56.5,27.5C-63.5,9.9,-68.5,-7.3,-64.2,-21.6C-59.8,-36,-46.2,-47.5,-32.1,-56.5C-18,-65.4,-3.3,-71.7,9.2,-72.1C21.8,-72.4,36.3,-67,47.7,-57.2Z" transform="translate(100 100)" />
          </svg>
        </div>
      </div>
      
      {/* 세련된 스크롤 다운 인디케이터 */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-sage animate-bounce opacity-80 cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

export default HeroSection; 