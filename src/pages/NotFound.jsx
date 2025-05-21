import { Link } from 'react-router-dom';

// NotFound 컴포넌트: 잘못된 URL 접근 시 표시되는 404 페이지
function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4 text-center">
      <div data-aos="fade-up">
        <h1 className="text-6xl md:text-7xl font-cormorant font-semibold text-sage mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-lora text-gray-800 mb-6">페이지를 찾을 수 없습니다</h2>
        <p className="text-gray-600 max-w-md mb-8">
          찾으시는 페이지가 삭제되었거나 이동되었을 수 있습니다.
          다른 페이지를 둘러보시거나 홈페이지로 돌아가세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/" className="btn-primary">
            홈페이지로 돌아가기
          </Link>
          <Link to="/contact" className="btn-secondary">
            문의하기
          </Link>
        </div>
        
        {/* 장식용 식물 일러스트 */}
        <div className="mt-12 opacity-30">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" stroke="currentColor" strokeWidth="0.5" />
            <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M12 3L12 8" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M15 5C15 5 17 7 17 12C17 17 15 19 15 19" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M9 5C9 5 7 7 7 12C7 17 9 19 9 19" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default NotFound; 