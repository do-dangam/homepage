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

## GitHub Pages 배포

`npm run dev`로 보이는 화면과 GitHub Pages는 **다릅니다**.

- 루트 `index.html`은 Vite **개발용** 파일입니다 (`/src/main.jsx`를 불러옴 → GitHub에서는 동작 안 함)
- GitHub Pages는 **빌드된 정적 파일**만 서빙합니다

### 방법 A — `docs` 폴더로 수동 배포 (업로드 방식, 가장 쉬움)

저장소 이름이 `homepage`인 경우 (`https://do-dangam.github.io/homepage/`):

```bash
npm.cmd run build:pages
```

이 명령은 `/homepage/` 경로에 맞게 빌드한 뒤, 결과물을 `docs/` 폴더에 복사합니다.

**GitHub에서 할 일:**

1. 생성된 **`docs` 폴더 전체**를 저장소에 업로드 (Add file → Upload files)
2. **Settings → Pages** 에서:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **`/docs`** ← 지금 `/(root)`가 아니라 여기로 변경
3. 1~2분 후 접속: **`https://do-dangam.github.io/homepage/`**

> `do-dangam.github.io` 만 치면 빈 화면이 나올 수 있습니다. 반드시 **`/homepage/`** 까지 포함한 주소로 접속하세요.

### 방법 B — GitHub Actions 자동 배포 (권장)

1. `.github/workflows/deploy.yml` 포함한 전체 프로젝트를 push
2. **Settings → Pages → Source: GitHub Actions**
3. `main` 브랜치에 push할 때마다 자동 빌드·배포

### 방법 C — 루트에 빌드 결과만 올리기

```bash
npm.cmd run build -- --base=/homepage/
```

`dist/` **안의 파일들**(`index.html`, `assets/`, `favicon.svg` 등)만 저장소 **루트**에 올리고, 개발용 루트 `index.html`을 덮어씁니다. Pages 설정은 `/(root)` 유지.

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
