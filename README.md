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

## shop 페이지

전체 제품 목록을 조회할 수 있습니다.

각 상품 클릭 시 상세 페이지로 이동합니다.

검색 입력과 카테고리 선택에 따라 상품이 필터링됩니다.

* 검색 입력은 실시간 반영되어 즉시 결과가 업데이트됩니다.
 
* 카테고리 선택 시 해당 카테고리에 속한 상품만 보여집니다.

```
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items ?? []);
  const [searchItem, setSearchItem] = useState("");
  const [selectCategory, setSelectCategory] = useState("ALL");

  const filterProducts = products.filter((item) => {
    const matchCategory =
      selectCategory === "ALL" || item.category === selectCategory;

    const matchSearch =
      searchItem.trim() === "" ||
      item.product_title.toLowerCase().includes(searchItem.toLowerCase());

    return matchCategory && matchSearch;
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await productsApi();
        dispatch(setProducts(data));
      } catch (error) {
        alert("에러발생");
      }
    }
    fetchData();
  }, [dispatch]);

```
<img width="999" height="832" alt="image" src="https://github.com/user-attachments/assets/d26f10c3-b46e-4bee-acf0-9d9e606cba7f" />

```
   <SearchBox>
        <SearchInput
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
        <SearchBotton>search</SearchBotton>
      </SearchBox>
      <SearchCategory>
        {shopCategory.map((item) => (
          <CategoryItem
            key={item.id}
            onClick={() => setSelectCategory(item.menu)}
            Active={selectCategory === item.menu}
          >
            {item.menu}
          </CategoryItem>
        ))}
      </SearchCategory>

```


## 상세 페이지

선택한 상품의 상세 정보를 확인할 수 있습니다.

사용자는 수량 조절(+) (-) 기능을 통해 원하는 개수를 설정할 수 있습니다.

장바구니 담기 버튼을 통해 상품을 장바구니에 추가할 수 있습니다.

```
 const [count, setCount] = useState(1);

  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.items ?? []);
  const product = products.find((item) => String(item.id) === id);

  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  console.log(product, "Sadasdsad");

  const handleAddToItem = () => {
    dispatch(addItem({ ...product, count }));
    dispatch(openModal());
  };

  const handleAddCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleSubCount = () => {
    if (count <= 1) {
      return;
    } else {
      setCount((prev) => prev - 1);
    }
  };
```

<img width="1136" height="684" alt="image" src="https://github.com/user-attachments/assets/fabfc94f-2cc7-46d5-8ec1-7380ee220736" />


## cart 페이지

장바구니에 담은 상품 목록을 확인할 수 있습니다.

각 상품별 수량 수정 기능을 제공하여 사용자가 원하는 만큼 조절 가능합니다.

상품 삭제 및 총 결제 금액 확인 기능을 제공합니다.

```
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const totalCount = cartItems.reduce((total, item) => total + item.count, 0);
  const totalItemPrice = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  if (cartItems.length === 0) {
    return (
      <CartPage>
        <CartTitle>Cart()</CartTitle>
        <NotInfo style={{ padding: "2rem" }}>장바구니가 비어 있습니다</NotInfo>
      </CartPage>
    );
  }

  const handleAddCount = (id) => {
    dispatch(addCount({ id }));
  };

  const handleSubCount = (id) => {
    dispatch(subCount({ id }));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem({ id }));
  };
```

<img width="1908" height="718" alt="image" src="https://github.com/user-attachments/assets/82f831ea-50c5-4352-aa84-4373a3b099c0" />


 ### modal 전역 상태 관리

* 모달 창은 전역 상태 관리(store)를 통해 제어됩니다.

* 전역 관리 방식을 채택함으로써, 중복 코드 최소화 및 유지보수 효율성을 확보했습니다.

```
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "cartModal",
  initialState: { isOpen: false },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
```
<img width="821" height="380" alt="image" src="https://github.com/user-attachments/assets/9b1b3495-28ef-4c42-8122-b59f7c168d7e" />


## 모아보기

### MODAL

https://github.com/user-attachments/assets/42b2d28b-81fe-46f1-89d4-11e932bb56dc

### CATEGORY

https://github.com/user-attachments/assets/8d102c68-c283-4455-813b-5b80f62a1640

### DETAIL

https://github.com/user-attachments/assets/f4c2c1f6-5599-4c34-8559-8b3d76be6fba

### CART

https://github.com/user-attachments/assets/b190150a-50f0-4d6d-8d5f-2f132bc073cd





