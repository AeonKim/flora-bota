import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot';
import { motion } from 'framer-motion';

// 부드러운 페이드 애니메이션 설정
const fadeVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};

const fadeTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.7
};

// 레이아웃 컴포넌트: 모든 페이지에 공통으로 적용되는 네비게이션 바와 푸터를 포함
function Layout() {
  // 현재 페이지 경로 확인
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial="initial"
        animate="in"
        exit="exit"
        variants={fadeVariants}
        transition={fadeTransition}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default Layout; 