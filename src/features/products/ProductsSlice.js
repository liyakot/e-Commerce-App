import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: "",
  filteredProducts: [],
  product: "",
  sortingOption: "",
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    return await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => res.data);
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterProducts: (state, action) => {
      state.filteredProducts =
        action.payload === "all"
          ? state.products
          : state.products.filter((item) => item.category === action.payload);
    },

    setSortingOption: (state, action) => {
      state.sortingOption = action.payload;
    },

    sortProducts: (state) => {
      state.filteredProducts =
        state.sortingOption === "Price (Low to High)"
          ? state.filteredProducts.sort(function (a, b) {
              return a.price - b.price;
            })
          : state.sortingOption === "Price (High to Low)"
          ? state.filteredProducts.sort(function (a, b) {
              return b.price - a.price;
            })
          : state.filteredProducts.sort(function (a, b) {
              return b.rating.rate - a.rating.rate;
            });
    },

    displayProduct: (state, action) => {
      state.product = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export const {
  filterProducts,
  displayProduct,
  sortProducts,
  setSortingOption,
} = productsSlice.actions;
export default productsSlice.reducer;
