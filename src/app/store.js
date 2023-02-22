import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/cart/CartSlice";
import ProductsSlice from "../features/products/ProductsSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductsSlice,
  },
});
