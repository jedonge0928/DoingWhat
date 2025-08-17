import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleteItem, subCount } from "../../store/cartSlice";
import { Link } from "react-router-dom";

/* ========== Styled Components (통합) ========== */
const NotInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  font-size: 1.4rem;
  font-weight: bold;
`;

const CartPage = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  box-sizing: border-box;
  max-width: 100%;
`;

const CartTitle = styled.h2`
  font-size: 1.7rem;
  padding: 20px 10px;
  border-bottom: 1px solid #e6e6e6;
`;

const CartMain = styled.div`
  max-width: 1920px;
  margin: 0 auto;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0px 0px 4px #6ea1df;

  @media ${({ theme }) => theme.device.ms} {
    flex-direction: column;
    gap: 20px;
  }
`;

const ProductTitle = styled.div`
  width: 200px;
  font-size: 1.2rem;

  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
  }
`;

const ProductNum = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.2rem;

  div {
    padding: 20px;
    border: 1px solid #6ea1df;
    border-radius: 5px;
  }

  @media ${({ theme }) => theme.device.ms} {
    div {
      padding: 20px;
    }
  }
`;

const SubBtn = styled.div`
  cursor: pointer;
`;

const AddBtn = styled.div`
  cursor: pointer;
`;

const RegularPrice = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1rem;
  color: #a1a1a1;

  @media ${({ theme }) => theme.device.ms} {
    display: none;
  }
`;

const SalePrice = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.2rem;
`;

const Sale = styled.p`
  color: #1981e5;
`;

const DeleteBtn = styled.button`
  display: inline-block;
  border: none;
  background-color: #c4c4c4ff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #ff0000;
  }

  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
    background-color: #ff0000;
  }
`;

const TotalPrice = styled.h3`
  text-align: right;
  margin-top: 1rem;
  font-size: 1.5rem;
`;

const Buy = styled.div`
  margin: 20px auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const BuyBtn = styled.button`
  background-color: #6ea1df;
  border: 1px solid #6ea1df;
  padding: 10px 100px;
  color: white;
  font-size: 1.3rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: white;
    color: #6ea1df;
  }

  @media ${({ theme }) => theme.device.ms} {
    width: 100%;
  }
`;

/* ========== Component ========== */

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
                <Link to={`/shop/${item.id}`}>
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
                </Link>
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
