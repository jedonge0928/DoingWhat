import MainLayout from "./layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import About from "./pages/about/About";
import Event from "./pages/event/Event";
import Cart from "./pages/cart/Cart";
import EventDetail from "./pages/event/EventDetail";
import ShopDetail from "./pages/shop/ShopDetail";
import ProductInfo from "./pages/shop/productMenu/ProductInfo";
import ProductDetail from "./pages/shop/productMenu/ProductDetail";
import ProductReview from "./pages/shop/productMenu/ProductReview";
import ProductQna from "./pages/shop/productMenu/ProductQna";

function App() {
  return (

        <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopDetail />}>
          <Route path="detail" element={<ProductDetail />} />
          <Route path="review" element={<ProductReview />} />
          <Route path="qna" element={<ProductQna />} />
          <Route path="info" element={<ProductInfo />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
