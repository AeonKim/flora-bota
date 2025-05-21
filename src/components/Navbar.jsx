import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

// 네비게이션 바 컴포넌트: 웹사이트의 주요 메뉴와 로고를 포함
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 스크롤 위치에 따라 네비게이션 바 스타일 변경
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 모바일 메뉴 토글 함수
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 활성화된 링크에 적용할 스타일
  const activeStyle = "text-sage border-b-2 border-sage font-medium";
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-elegant py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex items-center justify-between">
        {/* 로고 */}
        <Link to="/" className="font-cormorant text-2xl md:text-3xl font-semibold transition-colors">
          <span className="text-charcoal">Flora</span>
          <span className="text-sage ml-1">Bota</span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden lg:flex items-center space-x-10 font-montserrat text-sm tracking-wide">
          <NavLink to="/" end className={({ isActive }) => 
            isActive ? activeStyle : "text-charcoal-light hover:text-sage transition-all duration-300"
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            isActive ? activeStyle : "text-charcoal-light hover:text-sage transition-all duration-300"
          }>
            About Artist
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => 
            isActive ? activeStyle : "text-charcoal-light hover:text-sage transition-all duration-300"
          }>
            Portfolio
          </NavLink>
          <NavLink to="/exhibitions" className={({ isActive }) => 
            isActive ? activeStyle : "text-charcoal-light hover:text-sage transition-all duration-300"
          }>
            Exhibitions
          </NavLink>
          <NavLink to="/workshops" className={({ isActive }) => 
            isActive ? activeStyle : "text-charcoal-light hover:text-sage transition-all duration-300"
          }>
            Workshops
          </NavLink>
          <NavLink to="/collaboration" className={({ isActive }) => 
            isActive ? activeStyle : "text-charcoal-light hover:text-sage transition-all duration-300"
          }>
            Collaboration
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive ? activeStyle : "text-charcoal-light hover:text-sage transition-all duration-300"
          }>
            Contact
          </NavLink>
        </div>

        {/* 모바일 메뉴 토글 버튼 */}
        <button 
          className="lg:hidden text-charcoal p-1 rounded-md hover:bg-sage-lightest transition-colors duration-300 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div className={`lg:hidden bg-white/98 backdrop-blur-md shadow-elegant overflow-hidden transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container-custom py-6 flex flex-col space-y-5 font-montserrat">
          <NavLink to="/" end className={({ isActive }) => 
            isActive ? "text-sage font-medium px-3 py-1 rounded-md bg-sage-lightest" : "text-charcoal-light hover:text-sage px-3 py-1 rounded-md hover:bg-sage-lightest/50 transition-all duration-300"
          } onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            isActive ? "text-sage font-medium px-3 py-1 rounded-md bg-sage-lightest" : "text-charcoal-light hover:text-sage px-3 py-1 rounded-md hover:bg-sage-lightest/50 transition-all duration-300"
          } onClick={() => setIsMobileMenuOpen(false)}>
            About Artist
          </NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => 
            isActive ? "text-sage font-medium px-3 py-1 rounded-md bg-sage-lightest" : "text-charcoal-light hover:text-sage px-3 py-1 rounded-md hover:bg-sage-lightest/50 transition-all duration-300"
          } onClick={() => setIsMobileMenuOpen(false)}>
            Portfolio
          </NavLink>
          <NavLink to="/exhibitions" className={({ isActive }) => 
            isActive ? "text-sage font-medium px-3 py-1 rounded-md bg-sage-lightest" : "text-charcoal-light hover:text-sage px-3 py-1 rounded-md hover:bg-sage-lightest/50 transition-all duration-300"
          } onClick={() => setIsMobileMenuOpen(false)}>
            Exhibitions
          </NavLink>
          <NavLink to="/workshops" className={({ isActive }) => 
            isActive ? "text-sage font-medium px-3 py-1 rounded-md bg-sage-lightest" : "text-charcoal-light hover:text-sage px-3 py-1 rounded-md hover:bg-sage-lightest/50 transition-all duration-300"
          } onClick={() => setIsMobileMenuOpen(false)}>
            Workshops
          </NavLink>
          <NavLink to="/collaboration" className={({ isActive }) => 
            isActive ? "text-sage font-medium px-3 py-1 rounded-md bg-sage-lightest" : "text-charcoal-light hover:text-sage px-3 py-1 rounded-md hover:bg-sage-lightest/50 transition-all duration-300"
          } onClick={() => setIsMobileMenuOpen(false)}>
            Collaboration
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive ? "text-sage font-medium px-3 py-1 rounded-md bg-sage-lightest" : "text-charcoal-light hover:text-sage px-3 py-1 rounded-md hover:bg-sage-lightest/50 transition-all duration-300"
          } onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 