# doing-What

## 1. 사용법

/shop 페이지에서 제품 목록 확인

각 상품 클릭 시 상세 페이지 진입 후 수량 조절 및 장바구니 담기 가능

/cart 페이지에서 장바구니 내역 확인 및 수량 수정 가능

/modal 창 전역상태관리

## 2. 기술 스택

React

Redux Toolkit

React Router DOM

Bootstrap  

JSON fetch API

## 3. 폴더 구조
/src

  /components   # 재사용 가능한 UI 컴포넌트들 (버튼, 레이아웃 내부 요소, 모달 등 작은 단위 컴포넌트)
  
  /constants    # 상수값 관리 (네비게이션 메뉴)
  
  /data         # 샘플 데이터, 더미 데이터, JSON 형태의 제품 리스트 등 실제 데이터 모음
  
  /layouts      # 페이지 공통 레이아웃 컴포넌트 (헤더, 푸터, 사이드바 등 페이지 전체 틀)
  
  /store        # Redux 관련 코드 (slice, reducer, store 설정 파일 등 상태 관리 코드)
  
  /pages        # 라우팅에 대응하는 페이지 단위 컴포넌트 (홈, 샵, 장바구니 등 주요 화면)
  
  App.js        # 앱 최상위 컴포넌트. 라우팅 설정과 전역 Provider(스토어, 테마 등) 연결 담당
  
  /useViewport  #반응형 디자인을 위해 화면 크기 기준(미디어쿼리)을 설정
  
<img width="167" height="303" alt="image" src="https://github.com/user-attachments/assets/26c81706-23f5-44aa-a77a-d221f41504a5" />


  ## 4. 코드리뷰(Code Review)

- **가독성**: 변수명, 함수명을 직관적으로 설정
  
- **상태 관리**: Redux Toolkit을 활용해 modal,count,product 상태관리를 하였습니다.

<br/>
<img width="486" height="309" alt="image" src="https://github.com/user-attachments/assets/881c6e6f-a68c-4354-909d-ba61730255d8" />

<br/>
<img width="486" height="309" alt="image" src="https://github.com/user-attachments/assets/a6b16115-3033-4c1d-9508-9744550df0de" />

- **API 호출 및 데이터 처리**: json파일을 직접 만들어 fetch 처리하였습니다.
<img width="486" height="309" alt="image" src="https://github.com/user-attachments/assets/a7faa8da-e718-4a17-871b-da06e3516770" />
<img width="486" height="309" alt="image" src="https://github.com/user-attachments/assets/92ffa780-2037-482b-bd8b-e49553d369ef" />

<br/>

- ## **상태 및 redux 연결 / 필터링 로직

<br/>

<img width="486" height="309" alt="image" src="https://github.com/user-attachments/assets/f43de5e9-cf1a-44bf-968b-d960ff68b0ea" />

<br/>

<ul>
  <li>dispatch를 사용해 Redux 상태를 변경할 수 있게 준비</li>

<li>products는 Redux store에서 상품 목록을 가져오며, 값이 없으면 빈 배열을 기본값으로 설정</li>

<li>searchItem과 selectCategory는 사용자 입력에 따라 필터링에 사용</li>

<li>selectCategory가 "ALL"일 경우 모든 상품을 포함하거나, 선택된 카테고리와 일치하는 상품만 필터링</li>

</ul>


## 모아보기


https://github.com/user-attachments/assets/42b2d28b-81fe-46f1-89d4-11e932bb56dc


![React-App-Chrome-2025-09-08-16-58-34](https://github.com/user-attachments/assets/31a37ea8-990c-48fb-aee3-130304ba324c)




