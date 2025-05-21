import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// 스타일 임포트
import './styles/index.css'

// AOS 라이브러리 임포트 및 초기화
import AOS from 'aos';
import 'aos/dist/aos.css';

// AOS 초기화
AOS.init({
  duration: 1200,
  easing: 'ease-in-out',
  once: false,
  offset: 120,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
) 