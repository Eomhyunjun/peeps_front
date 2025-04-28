# 🚀 PEEPS 프론트엔드 코드베이스 소개

본 문서는 PEEPS 프론트엔드 프로젝트의 구조와 핵심 시스템, 기술 스택을 정리한 README 파일입니다. 🎉

## 📌 목차
1. [목적 및 비전](#목적-및-비전)
2. [기술 스택](#기술-스택)
3. [시스템 아키텍처 개요](#시스템-아키텍처-개요)
4. [핵심 시스템](#핵심-시스템)
5. [데이터 흐름 구조](#데이터-흐름-구조)
6. [프로젝트 폴더 구조](#프로젝트-폴더-구조)
7. [개발 환경](#개발-환경)
8. [스타일링 가이드](#스타일링-가이드)
9. [마무리](#마무리)

## 🎯 목적 및 비전
**PEEPS**는 **디지털 인증 뱃지**와 **커뮤니티 서클**을 중심으로 한 소셜 플랫폼입니다.

- 🔐 **로그인 & 프로필 관리**
- 🏅 **뱃지 획득 & 전시**
- 🌐 **서클 가입 & 활동**
- 📝 **게시글 작성 & 소통**
- 🛠️ **관리자 기능 (뱃지 발급/승인)**

모듈화, 유지보수성, 성능 최적화를 중시하며 UX를 최우선으로 고려하여 개발되었습니다.

## 💻 기술 스택
| 기술 | 용도 | 비고 |
|:---|:---|:---|
| Next.js 14 | React 기반 SSR 프레임워크 | `package.json` |
| Recoil | 전역 상태 관리 | Atom |
| React Query | API 데이터 요청 & 캐싱 | Hook |
| Tailwind CSS | 유틸리티 중심 CSS | `tailwind.config.js` |
| TypeScript | 타입 안정성 강화 | TS 설정 |

추가 라이브러리:
- 🎨 React Hook Form (폼 관리)
- ☁️ AWS SDK (S3 연동)
- 🧩 MSW (API Mock)

## 🏗️ 시스템 아키텍처 개요
```
Next.js App
├─ Pages & Layouts
├─ UI Components (Tailwind)
├─ Recoil Atoms/Selectors
├─ Axios API Client
└─ React Query Hooks
```

## 🛠️ 핵심 시스템
### 1. 유저 시스템 (User Management)
- 로그인/로그아웃 상태 관리
- 프로필 & 팔로우 관리
- 관련 엔티티: `LogedInUserReqDataAtom`, `IsUserLogedInAtom`

### 2. 뱃지 & 서클 시스템 (Badge & Circle)
- 뱃지 인증/발급 플로우
- 서클 생성/참여
- 관련 엔티티: `Badge_T`, `CircleDataAtom`

### 3. 게시글 & 콘텐츠 시스템 (Post & Content)
- 게시글 CRUD & 상호작용
- 이미지 업로드
- 관련 엔티티: `Post_T`, `FEED_POST_T`

### 4. 관리자 시스템 (Admin)
- 뱃지 승인/관리
- 회원 관리
- 관련 엔티티: `AdminBadgeListAtom`

## 🔄 데이터 흐름 구조
1. 사용자 액션
2. React Query → API 요청
3. 서버 응답 → Recoil 업데이트
4. UI 렌더링

## 📂 프로젝트 폴더 구조
```
src/  
├── app/             # Next.js App Router 기반 페이지 및 레이아웃  
│   ├── (other)/     # 라우트 그룹 (관리자 페이지 등)  
│   ├── (needSidebar)/ # 사이드바가 필요한 페이지들
│   ├── api/         # Route Handlers
│   ├── global.css   # 전역 스타일  
│   ├── styles.css   # 추가 스타일  
│   └── layout.tsx   # 루트 레이아웃  
├── common/          # 공통 모듈  
    ├── api/         # API 통신 관련 모듈
    ├── components/  # 공통 컴포넌트
    ├── const/       # 공통 상수
    ├── hooks/       # 공통 hooks
    ├── recoil/      # Recoil 상태 관리  
    ├── types/       # TypeScript 타입 정의  
    └── utils/       # 유틸리티 함수  
```

## 🚧 개발 환경
```bash
yarn dev      # 개발 서버 (Hot Reload)
yarn build    # 빌드
yarn start    # 프로덕션 서버
yarn lint     # 린트 검사
```

## 🎨 스타일링 가이드
- **컬러**: blue.primary, gray scale 등
- **타이포그래피**: 폰트 크기/굵기 표준화
- **반응형**: 825px, 675px, 450px
- **레이아웃**: mainWidth 1140px, headerSize 60px

## ✅ 마무리
PEEPS 프론트엔드는 **Next.js + Recoil + React Query** 기반의 모던 소셜 플랫폼입니다.  
더 자세한 내용은 [위키 문서](https://deepwiki.com/Eomhyunjun/peeps_front)를 참고하세요!
