import {
  GnbLink,
  ProductButton,
  ProductDelivery,
  ProductDetail,
  ProductDetailText,
  ProductGnb,
  ProductImg,
  ProductNumber,
  ProductRegularPrice,
  ProductSale,
  ProductTitle,
  ProductTotalPrice,
  ShopDetailPage,
} from "./ShopDetail.styles";
import { DetailProductGnb } from "../../contants/navigation";
import { Outlet, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem } from "../../store/cartSlice";
import { openModal } from "../../store/modalSlice";

export default function ShopDetail() {
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

  return (
    <ShopDetailPage>
      <ProductDetail>
        <ProductImg>
          <img
            src={process.env.PUBLIC_URL + product.image_url}
            alt={product.product_title}
          />
        </ProductImg>
        <ProductDetailText>
          <ProductTitle>{product.product_title}</ProductTitle>
          <ProductDelivery>
            <p>배송방법</p>
            <p>택배</p>
          </ProductDelivery>
          <ProductDelivery>
            <p>배송비</p>
            <p>
              3,000원 <span>(30,000원 이상 구매 시 무료)</span>
            </p>
          </ProductDelivery>
          <ProductNumber>
            <p>수량 :</p>
            <div>
              <div onClick={() => handleSubCount()}>-</div>
              <div>{count}</div>
              <div onClick={() => handleAddCount()}>+</div>
            </div>
          </ProductNumber>
          <ProductRegularPrice>
            <p>정가</p>
            <p>{product.before_price?.toLocaleString()}원</p>
          </ProductRegularPrice>
          <ProductSale>
            <p>할인</p>
            <p>{product.discountPercent}% 할인</p>
          </ProductSale>
          <ProductTotalPrice>
            <p>Total</p>
            <p>{product.after_price?.toLocaleString()}원</p>
          </ProductTotalPrice>
          <ProductButton>
            <button onClick={() => handleAddToItem()}>장바구니</button>
            <button>Buy Now</button>
          </ProductButton>
        </ProductDetailText>
      </ProductDetail>
      <ProductGnb>
        {DetailProductGnb.map((item) => (
          <GnbLink key={item.id} to={item.path} end={item.path === "."}>
            {item.menu}
          </GnbLink>
        ))}
      </ProductGnb>
      <Outlet />
    </ShopDetailPage>
  );
}
