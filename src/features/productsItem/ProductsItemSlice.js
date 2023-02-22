import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: "",
  loading: false,
  error: "",
};

/* export const getProduct = createAsyncThunk("product/getProduct", async (id, {dispatch}) => {
 const result = await axios.get(`https://fakestoreapi.com/products/${id}`);
 

}); */

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    displayProduct: (state, action) => {
      state.product = state.products.find((item) => item.id === action.payload);
    },
  },
  /* extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
      state.error = "";
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.product = "";
      state.error = action.error.message;
    });
  }, */
});

/* export const { displayProduct } = productSlice.actions;
export default productSlice.reducer; */
