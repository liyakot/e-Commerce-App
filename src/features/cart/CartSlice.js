import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const exist = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (exist) {
        state.products = state.products.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.products = [
          ...state.products,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
    },

    deleteProduct: (state, action) => {
      const exist2 = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (exist2.quantity === 1) {
        state.products = state.products.filter((item) => item.id !== exist2.id);
      } else {
        state.products = state.products.map((item) =>
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
