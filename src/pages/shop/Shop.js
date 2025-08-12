import React, { useEffect, useState } from "react";
import {
  AfterPrice,
  BeforePrice,
  CartButton,
  CategoryItem,
  EngTitle,
  ImageWrap,
  ItemTitle,
  ListItem,
  ProductsList,
  SearchBotton,
  SearchBox,
  SearchCategory,
  SearchInput,
  ShopPage,
  ShopTitle,
  SoldOut,
  TitleBox,
  TotalPrice,
} from "./Shop.styles";
import { shopCategory } from "../../contants/navigation";
import { productsApi } from "../../api/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/productSlice";
import { addItem } from "../../store/cartSlice";
import { Link } from "react-router-dom";
import CartModal from "../../components/modal/CartModal";

export default function Shop() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items ?? []);
  const [modal, setModal] = useState(false);
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
        alert("에러발생 : ");
      }
    }
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (modal) {
      const timer = setTimeout(() => {
        setModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [modal]);
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    setModal(true);
  };

  return (
    <ShopPage>
      <ShopTitle>SHOP</ShopTitle>
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
      <ProductsList>
        {filterProducts.map((item) => (
          <ListItem key={item.id}>
            <ImageWrap>
              <Link to={`/shop/${item.id}/detail`}>
                <img
                  src={process.env.PUBLIC_URL + item.image_url}
                  alt={item.product_title}
                  draggable="false"
                />
              </Link>
            </ImageWrap>
            <div>
              <TitleBox>
                {" "}
                {item.isSoldOut && <SoldOut>품절</SoldOut>}
                <ItemTitle>{item.product_title}</ItemTitle>
              </TitleBox>
              {item.eng_title && <EngTitle>{item.eng_title}</EngTitle>}
            </div>
            <BeforePrice>{item.before_price.toLocaleString()}원</BeforePrice>
            <TotalPrice>
              {item.discountPercent === 0 ? null : (
                <span>({item.discountPercent}%할인)</span>
              )}
              <AfterPrice>{item.after_price.toLocaleString()}원</AfterPrice>
            </TotalPrice>
            <CartButton
              onClick={() => {
                handleAddToCart(item);
              }}
            >
              장바구니
            </CartButton>
          </ListItem>
        ))}
      </ProductsList>{" "}
      {modal && <CartModal onClose={() => setModal(false)} />}
    </ShopPage>
  );
}
