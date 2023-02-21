import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  product: "",
  loading: false,
  error: "",
};

export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  await axios.get(`https://fakestoreapi.com/products`).then((res) => res.data);
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export const { filterProducts } = productSlice.actions;
export default productSlice.reducer;
