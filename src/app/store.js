import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/CartSlice";
import productsSlice from "../features/products/ProductsSlice";
import drawerSlice from "../features/drawer/DrawerSlice";
import UserSlice from "../features/user/UserSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  cart: cartSlice,
  products: productsSlice,
  drawer: drawerSlice,
  user: UserSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
