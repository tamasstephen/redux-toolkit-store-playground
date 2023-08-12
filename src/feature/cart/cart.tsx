import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/product.ts";

type CartState = {
  products: Product[];
  getProductsState: "idle" | "loading" | "failed";
  postProductsState: "idle" | "loading" | "failed";
};

const initialState: CartState = {
  products: [],
  getProductsState: "idle",
  postProductsState: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<Product>) => {
      const productToRemove = state.products.find(
        (product) => product.id !== action.payload.id
      );
      const idx = state.products.indexOf(productToRemove as Product);
      state.products = [
        ...state.products.slice(0, idx),
        ...state.products.slice(idx + 1),
      ];
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export const selectCartProducts = (state: { cart: CartState }) =>
  state.cart.products;

export default cartSlice.reducer;
