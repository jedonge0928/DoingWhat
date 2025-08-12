import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import cartModalReducer from "./modalSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    cartModal: cartModalReducer,
  },
});

export default store;
