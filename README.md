# 하이텍 홈페이지

젠다이, 포켓도어, 커텐박스 설계·제작·납품 전문 기업 **하이텍**의 회사 홈페이지입니다.

## 실행 방법

```bash
npm.cmd install
npm.cmd run dev
```

브라우저에서 `http://localhost:5173` 접속

> PowerShell에서 `npm`이 안 될 경우 `npm.cmd`를 사용하세요.

## 빌드

```bash
npm.cmd run build
npm.cmd run preview
```

빌드 결과는 `dist/` 폴더에 생성됩니다.

## 페이지 구성

- **히어로** — 회사 소개 및 핵심 수치
- **회사소개** — 업력, 자체 공장, 맞춤 제작
- **사업분야** — 도면 설계, 제작, 납품, 시공
- **작업프로세스** — 4단계 납품 프로세스
- **납품실적** — 프로젝트 포트폴리오
- **선택 이유** — 경쟁력 요소
- **문의하기** — 연락처 및 견적 문의 폼

## 커스터마이징

- 문구·섹션: `src/components/` 각 컴포넌트
- 스타일: `src/index.css`
- 이미지: `public/` (로고 `logo.png`, 배경 `company.jpg`)
