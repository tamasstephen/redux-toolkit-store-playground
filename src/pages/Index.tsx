import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  selectProducts,
  selectGetProductsState,
  getAsyncProducts,
} from "../feature/products/products";
import ProductList from "../components/ProductList/ProductList";
import { StyledContentWrapper } from "./Index.styled";

const Index = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const getProductsState = useAppSelector(selectGetProductsState);

  useEffect(() => {
    if (getProductsState === "idle") {
      dispatch(getAsyncProducts());
    }
  }, [getProductsState, dispatch]);

  return (
    <StyledContentWrapper>
      <ProductList products={products} />
    </StyledContentWrapper>
  );
};

export default Index;
