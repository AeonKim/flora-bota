import { Link } from 'react-router-dom';

// 푸터 컴포넌트: 사이트 하단에 표시되는 추가 내비게이션, 저작권 정보, SNS 링크 등을 포함
function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-sage-lightest">
      <div className="container-custom">
        {/* 상단 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 로고 및 간략 소개 */}
          <div className="lg:col-span-2">
            <div className="font-cormorant text-3xl font-semibold mb-4">
              <span className="text-charcoal">Flora</span>
              <span className="text-sage ml-1">Bota</span>
            </div>
            <p className="text-charcoal-light leading-relaxed mb-6 max-w-md">
              자연의 세밀한 아름다움을 담아내는 보태니컬 아티스트 Flora Kim의 스튜디오. 
              세밀화와 자연 요소를 활용한 다양한 작품 활동 및 워크샵을 진행합니다.
            </p>
            <div className="flex space-x-5 mt-6">
              {/* SNS 링크 */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-sage transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-sage transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-sage transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-charcoal-light hover:text-sage transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* 빠른 링크 */}
          <div>
            <h4 className="font-lora text-lg font-medium text-charcoal mb-5 relative inline-block">
              Pages
              <span className="absolute -bottom-1 left-0 w-1/2 h-px bg-sage-light"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-charcoal-light hover:text-sage transition-colors hover:pl-1 duration-300 inline-block">
                  About Artist
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-charcoal-light hover:text-sage transition-colors hover:pl-1 duration-300 inline-block">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/exhibitions" className="text-charcoal-light hover:text-sage transition-colors hover:pl-1 duration-300 inline-block">
                  Exhibitions
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="text-charcoal-light hover:text-sage transition-colors hover:pl-1 duration-300 inline-block">
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/collaboration" className="text-charcoal-light hover:text-sage transition-colors hover:pl-1 duration-300 inline-block">
                  Collaboration
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 연락처 */}
          <div>
            <h4 className="font-lora text-lg font-medium text-charcoal mb-5 relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-1/2 h-px bg-sage-light"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@florabota.art" className="text-charcoal-light hover:text-sage transition-colors">
                  contact@florabota.art
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:02-123-4567" className="text-charcoal-light hover:text-sage transition-colors">
                  02-123-4567
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-charcoal-light">
                  서울시 강남구 지피터스로 123<br />팁스타운 S1 2층
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 하단 저작권 정보 */}
        <div className="border-t border-gray-100 pt-8 mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-charcoal-light/70 text-sm">
              &copy; {currentYear} Flora Bota. 모든 권리 보유.
            </p>
            <div className="flex gap-6 text-sm text-charcoal-light/70">
              <Link to="/privacy" className="hover:text-sage transition-colors">개인정보 처리방침</Link>
              <Link to="/terms" className="hover:text-sage transition-colors">이용약관</Link>
              <Link to="/contact" className="hover:text-sage transition-colors">문의하기</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 