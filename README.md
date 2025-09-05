# doing-What 홈페이지 리뉴얼 프로젝트

## 1. 프로젝트 이름 & 한 줄 소개  
**doing-What** — React와 Redux Toolkit을 활용한 쇼핑몰 홈페이지 리뉴얼 프로젝트

## 2. 프로젝트 설명
- **프로젝트 배경:**  
  기존 홈페이지를 최신 React 환경으로 리뉴얼하며 사용자 경험을 개선하고, 효율적인 상태 관리를 도입하기 위해 시작했습니다.

- **주요 기능 요약:**  
  - React Router를 이용한 SPA 페이지 라우팅  
  - Redux Toolkit으로 전역 상태 관리 (제품 목록, 장바구니, 모달)  
  - 장바구니 및 수량 조절 기능 구현  
  - 직접 만든 JSON 파일을 fetch하여 제품 데이터 관리  

- **목적 및 사용 사례:**  
사용자 친화적인 쇼핑몰 UI를 반응형으로 구현하고(styled-component), React와 Redux Toolkit을 활용한 전역 상태 관리를 통해 효율적인 데이터 흐름과 기능 구현을 목표로 합니다.

## 3. 사용법

/shop 페이지에서 제품 목록 확인

각 상품 클릭 시 상세 페이지 진입 후 수량 조절 및 장바구니 담기 가능

/cart 페이지에서 장바구니 내역 확인 및 수량 수정 가능

/modal 창 전역상태관리

## 4. 기술 스택

React

Redux Toolkit

React Router DOM

Bootstrap  

JSON fetch API

## 5. 폴더 구조
/src
  /components    # 재사용 가능한 UI 컴포넌트들 (버튼, 레이아웃 내부 요소, 모달 등 작은 단위 컴포넌트)
  /constants    # 상수값 관리 (네비게이션 메뉴)
  /data         # 샘플 데이터, 더미 데이터, JSON 형태의 제품 리스트 등 실제 데이터 모음
  /layouts      # 페이지 공통 레이아웃 컴포넌트 (헤더, 푸터, 사이드바 등 페이지 전체 틀)
  /store        # Redux 관련 코드 (slice, reducer, store 설정 파일 등 상태 관리 코드)
  /pages        # 라우팅에 대응하는 페이지 단위 컴포넌트 (홈, 샵, 장바구니 등 주요 화면)
  App.js        # 앱 최상위 컴포넌트. 라우팅 설정과 전역 Provider(스토어, 테마 등) 연결 담당
  /useViewport  #반응형 디자인을 위해 화면 크기 기준(미디어쿼리)을 설정
  
<img width="167" height="303" alt="image" src="https://github.com/user-attachments/assets/26c81706-23f5-44aa-a77a-d221f41504a5" />


  ## 6. 코드리뷰(Code Review)

- **가독성**: 변수명, 함수명을 직관적으로 설정    
- **상태 관리**: Redux Toolkit을 활용해 modal,count,product 상태관리를 하였습니다.
<img width="410" height="249" alt="image" src="https://github.com/user-attachments/assets/3bc7bf0b-d180-4c79-8554-8cb7e6f7a049" />
<img width="476" height="329" alt="image" src="https://github.com/user-attachments/assets/a6b16115-3033-4c1d-9508-9744550df0de" />

- **API 호출 및 데이터 처리**: json파일을 직접 만들어 fetch 처리하였습니다.
- <img width="622" height="326" alt="image" src="https://github.com/user-attachments/assets/2902fb27-d64d-400a-8dbc-446df969bc22" />

- **예외 처리**: 에러 핸들링이 충분한지 확인합니다.
- <img width="330" height="243" alt="image" src="https://github.com/user-attachments/assets/9b852709-ca6e-4797-9ab5-b438341ae850" />








