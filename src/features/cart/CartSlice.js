import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const exist = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (exist) {
        state.cartProducts = state.cartProducts.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cartProducts = [
          ...state.cartProducts,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
    },

    deleteProduct: (state, action) => {
      const exist2 = state.cartProducts.find(
        (item) => item.id === action.payload.id
      );
      if (exist2.quantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.id !== exist2.id
        );
      } else {
        state.cartProducts = state.cartProducts.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
