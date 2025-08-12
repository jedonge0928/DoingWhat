import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TabDetailDiv, TabDetailImg } from "../ShopDetail.styles";

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
