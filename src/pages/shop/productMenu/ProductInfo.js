import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { InfoProduct } from "../ShopDetail.styles";
import { ProductInfoImg, ProductInfoImgDiv } from "./productQna.styles";

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
