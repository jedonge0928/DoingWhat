import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TabDetailDiv = styled.div`
  max-width: 1000px;
  box-sizing: border-box;
  margin: 0 auto;
`;
const TabDetailImg = styled.img`
  width: 100%;
  box-sizing: border-box;
`;
export default function ProductDetail() {
  const { id } = useParams();
  const products = useSelector((state) => state.product.items);
  const product = products.find((item) => String(item.id) === id);

  if (!product) return <div>상품 정보를 찾을 수 없습니다.</div>;

  return (
    <div>
      {Array.isArray(product.tabDetail) &&
        product.tabDetail.map((img, index) => (
          <TabDetailDiv>
            <TabDetailImg
              key={index}
              src={process.env.PUBLIC_URL + img}
              alt={product.product_title}
            />
          </TabDetailDiv>
        ))}
    </div>
  );
}
