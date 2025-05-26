# EmailJS 실제 이메일 전송 설정 가이드

Contact 페이지에서 실제 이메일 전송 기능을 사용하려면 EmailJS 서비스를 설정해야 합니다.

## 1. EmailJS 계정 생성
1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속
2. 무료 계정 생성 (월 200개 이메일까지 무료)

## 2. 이메일 서비스 연결
1. EmailJS 대시보드에서 "Email Services" 선택
2. Gmail 연결 (hust1901@gmail.com 계정 사용)
3. 서비스 ID 복사 (예: `service_abc123`)

## 3. 이메일 템플릿 생성
1. "Email Templates" 선택
2. 새 템플릿 생성
3. 템플릿 내용:
```
제목: Flora Bota 웹사이트 문의: {{subject}}

안녕하세요,

Flora Bota 웹사이트를 통해 새로운 문의가 도착했습니다.

보낸 사람: {{from_name}}
이메일: {{from_email}}
관심 분야: {{interest}}
제목: {{subject}}

메시지:
{{message}}

---
답변은 {{reply_to}}로 보내주세요.
이 메시지는 Flora Bota 웹사이트(Contact 페이지)에서 자동 전송되었습니다.
```
4. 템플릿 ID 복사 (예: `template_xyz789`)

## 4. 공개 키 확인
1. "Account" > "General" 선택
2. Public Key 복사 (예: `user_abcdef123`)

## 5. 환경 변수 설정

### 방법 1: .env.local 파일 생성 (권장)
프로젝트 루트에 `.env.local` 파일 생성:
```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abcdef123
```

### 방법 2: Vercel 환경 변수 설정
1. Vercel 대시보드 → 프로젝트 → Settings → Environment Variables
2. 다음 변수들 추가:
   - `VITE_EMAILJS_SERVICE_ID`: 서비스 ID
   - `VITE_EMAILJS_TEMPLATE_ID`: 템플릿 ID  
   - `VITE_EMAILJS_PUBLIC_KEY`: 공개 키

## 6. 테스트
1. 로컬에서 `npm run dev` 실행
2. Contact 페이지에서 메시지 전송 테스트
3. hust1901@gmail.com에서 이메일 수신 확인

## 현재 상태
- ✅ `emailjs-com` 패키지 설치 완료
- ✅ 실제 이메일 전송 코드 구현 완료
- ✅ 환경 변수 미설정 시 데모 모드로 작동
- ✅ UI는 기존과 동일하게 유지

## 주의사항
- 환경 변수가 설정되지 않으면 데모 모드로 작동 (실제 이메일 전송 안됨)
- EmailJS 무료 계정은 월 200개 이메일 제한
- 공개 키는 클라이언트 사이드에 노출되므로 보안상 문제없음
- Vercel 배포 시 환경 변수를 Vercel 대시보드에서 설정해야 함 