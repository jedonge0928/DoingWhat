import {
  AddBtn,
  Buy,
  BuyBtn,
  CartMain,
  CartPage,
  CartTitle,
  DeleteBtn,
  NotInfo,
  Product,
  ProductNum,
  ProductTitle,
  RegularPrice,
  Sale,
  SalePrice,
  SubBtn,
  TotalPrice,
} from "./Cart.styles";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteItem, subCount } from "../../store/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const totalCount = cartItems.reduce((total, item) => total + item.count, 0);
  const totalItemPice = cartItems.reduce(
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

  return (
    <CartPage>
      <CartTitle>Cart({totalCount})</CartTitle>
      <CartMain>
        <div style={{ padding: "2rem" }}>
          <div
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginTop: "1rem",
            }}
          >
            {cartItems.map((item) => (
              <Product key={item.id}>
                <div>
                  {item.image_url ? (
                    <img
                      src={process.env.PUBLIC_URL + item.image_url}
                      alt=""
                      style={{ width: "200px" }}
                    />
                  ) : (
                    "이미지없음"
                  )}
                </div>
                <ProductTitle>{item.product_title}</ProductTitle>
                <ProductNum>
                  <SubBtn onClick={() => handleSubCount(item.id)}>-</SubBtn>
                  <div>{item.count}</div>
                  <AddBtn onClick={() => handleAddCount(item.id)}>+</AddBtn>
                </ProductNum>
                <RegularPrice>
                  <p>정가</p>
                  <p>{Number(item.before_price).toLocaleString()}원</p>
                </RegularPrice>
                <SalePrice>
                  {item.discountPercent === 0 ? null : (
                    <Sale>({item.discountPercent}%할인)</Sale>
                  )}
                  <p>{item.after_price.toLocaleString()}원</p>
                </SalePrice>
                <DeleteBtn onClick={() => handleDelete(item.id)}>
                  삭제
                </DeleteBtn>
              </Product>
            ))}
          </div>

          <TotalPrice>총 가격 : {totalItemPice.toLocaleString()}원</TotalPrice>
        </div>
      </CartMain>
      <Buy>
        <BuyBtn>결제하기</BuyBtn>
      </Buy>
    </CartPage>
  );
}
