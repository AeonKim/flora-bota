# EmailJS 설정 가이드

Contact 페이지에서 실제 이메일 전송 기능을 사용하려면 EmailJS 서비스를 설정해야 합니다.

## 1. EmailJS 계정 생성
1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속
2. 무료 계정 생성 (월 200개 이메일까지 무료)

## 2. 이메일 서비스 연결
1. EmailJS 대시보드에서 "Email Services" 선택
2. Gmail, Outlook 등 원하는 이메일 서비스 연결
3. 서비스 ID 복사

## 3. 이메일 템플릿 생성
1. "Email Templates" 선택
2. 새 템플릿 생성
3. 템플릿 내용 예시:
```
제목: {{subject}}

보낸 사람: {{from_name}} ({{from_email}})
관심 분야: {{interest}}

메시지:
{{message}}

---
이 메시지는 Flora Bota 웹사이트에서 전송되었습니다.
답변은 {{reply_to}}로 보내주세요.
```
4. 템플릿 ID 복사

## 4. 공개 키 확인
1. "Account" > "General" 선택
2. Public Key 복사

## 5. 코드 수정
`src/pages/Contact.jsx` 파일에서 다음 부분을 수정:

```javascript
// 주석 해제하고 실제 값으로 교체
await emailjs.send(
  'YOUR_SERVICE_ID',     // 2단계에서 복사한 서비스 ID
  'YOUR_TEMPLATE_ID',    // 3단계에서 복사한 템플릿 ID
  templateParams,
  'YOUR_PUBLIC_KEY'      // 4단계에서 복사한 공개 키
);
```

## 6. 데모 모드 비활성화
실제 EmailJS 설정 후 다음 라인을 제거:
```javascript
// 이 라인 제거
await new Promise(resolve => setTimeout(resolve, 2000));
```

## 주의사항
- EmailJS 무료 계정은 월 200개 이메일 제한
- 공개 키는 클라이언트 사이드에 노출되므로 보안상 문제없음
- 스팸 방지를 위해 reCAPTCHA 추가 권장 