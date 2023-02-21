import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/cart/CartSlice";
import ProductsSlice from "../features/products/ProductsSlice";
import ProductSlice from "../features/productsItem/ProductsItemSlice";

export const store = configureStore({
  reducer: {
    cart: CartSlice,
    products: ProductsSlice,
    product: ProductSlice,
  },
});
