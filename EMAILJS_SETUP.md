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

### 방법 1: .env.local 파일 생성 (로컬 개발용)
프로젝트 루트에 `.env.local` 파일 생성:
```
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abcdef123
```

### 방법 2: Vercel 환경 변수 설정 (배포용) ⭐ 중요!
1. **Vercel 대시보드 접속**: https://vercel.com/dashboard
2. **프로젝트 선택** → **Settings** 탭 클릭
3. **Environment Variables** 섹션으로 이동
4. **다음 3개 변수를 정확히 추가**:
   
   | Name | Value | Environment |
   |------|-------|-------------|
   | `VITE_EMAILJS_SERVICE_ID` | `service_abc123` | Production, Preview, Development |
   | `VITE_EMAILJS_TEMPLATE_ID` | `template_xyz789` | Production, Preview, Development |
   | `VITE_EMAILJS_PUBLIC_KEY` | `user_abcdef123` | Production, Preview, Development |

5. **Save** 클릭
6. **프로젝트 재배포**: Settings → Deployments → 최신 배포 → Redeploy

### ⚠️ 주의사항
- 변수명은 반드시 `VITE_` 접두사로 시작해야 함
- Environment는 모든 환경(Production, Preview, Development) 선택
- 값 입력 시 따옴표 없이 입력
- 설정 후 반드시 재배포 필요

## 6. 테스트
1. 로컬에서 `npm run dev` 실행
2. Contact 페이지에서 메시지 전송 테스트
3. hust1901@gmail.com에서 이메일 수신 확인

## 7. 문제 해결

### 🚨 Vercel에서 메일이 안 올 때
1. **브라우저 개발자 도구 확인**:
   - F12 → Console 탭
   - "환경 변수 확인" 로그 확인
   - `hasServiceId`, `hasTemplateId`, `hasPublicKey`가 모두 `true`인지 확인

2. **환경 변수 재설정**:
   - Vercel 대시보드에서 환경 변수 다시 확인
   - 변수명에 오타가 없는지 확인 (`VITE_` 접두사 포함)
   - 모든 환경(Production, Preview, Development) 선택했는지 확인

3. **재배포 필수**:
   - 환경 변수 설정 후 반드시 재배포
   - Vercel → Settings → Deployments → Redeploy

4. **로그 확인**:
   - 콘솔에서 "데모 모드" 메시지가 나오면 환경 변수 미설정
   - "이메일 전송 성공" 메시지가 나와야 정상

### 🔍 디버깅 체크리스트
- [ ] EmailJS 계정 생성 완료
- [ ] Gmail 서비스 연결 완료  
- [ ] 이메일 템플릿 생성 완료
- [ ] 3개 환경 변수 Vercel에 설정 완료
- [ ] 환경 변수 설정 후 재배포 완료
- [ ] 브라우저 콘솔에서 환경 변수 로드 확인

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