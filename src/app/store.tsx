import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cart";
import productsReducer from "../feature/products/products";

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productsReducer,
});

export default function setupStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
