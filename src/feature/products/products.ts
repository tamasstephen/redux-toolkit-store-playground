import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/product";

enum FetchState {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}

type ProductsState = {
  products: Product[];
  getProductsState: FetchState;
};

const initialState: ProductsState = {
  products: [],
  getProductsState: FetchState.IDLE,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.getProductsState = FetchState.IDLE;
      })
      .addCase(getAsyncProducts.pending, (state) => {
        state.getProductsState = FetchState.LOADING;
      })
      .addCase(getAsyncProducts.rejected, (state) => {
        state.getProductsState = FetchState.FAILED;
      });
  },
});

export const getAsyncProducts = createAsyncThunk(
  "products/getAsyncProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
      const products = await response.json();
      return products as Product[];
    }
    return [];
  }
);

export const selectProducts = (state: { products: ProductsState }) =>
  state.products.products;
export const selectGetProductsState = (state: { products: ProductsState }) =>
  state.products.getProductsState;
export default productSlice.reducer;
