import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 1.5rem;

  @media ${({ theme }) => theme.device.xs} {
    font-size: 0.9rem;
  }
`;

const ProductInfoImgDiv = styled.div`
  width: 100%;
`;
const ProductInfoImg = styled.img`
  width: 100%;
`;

export default function ProductInfo() {
  const { id } = useParams();
  const products = useSelector((state) => state.product.items);
  const product = products.find((item) => String(item.id) === id);
  return (
    <div>
      <InfoProduct>
        <p>상품명 : {product.product_title}</p>
        <p>소비자가 : {product.before_price.toLocaleString()}원</p>
        <p>판매가 : {product.after_price.toLocaleString()}원</p>
        <p></p>
      </InfoProduct>

      <ProductInfoImgDiv>
        <ProductInfoImg
          src={process.env.PUBLIC_URL + "/img/info.png"}
          alt="상품 정보"
        />
      </ProductInfoImgDiv>
    </div>
  );
}
