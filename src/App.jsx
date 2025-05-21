import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// 레이아웃 컴포넌트 (추후 구현)
import Layout from './components/Layout';

// 페이지 컴포넌트 (추후 구현)
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Exhibitions from './pages/Exhibitions';
import Workshops from './pages/Workshops';
import Collaboration from './pages/Collaboration';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// ScrollToTop 컴포넌트: 페이지 이동 시 스크롤 위치를 상단으로 초기화
import { useEffect } from 'react';

// ScrollToTop 컴포넌트: 페이지 이동 시 스크롤 위치를 상단으로 초기화
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// App 컴포넌트: 라우팅 설정 및 전체 앱 구조 정의
function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="exhibitions" element={<Exhibitions />} />
            <Route path="workshops" element={<Workshops />} />
            <Route path="collaboration" element={<Collaboration />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App; 