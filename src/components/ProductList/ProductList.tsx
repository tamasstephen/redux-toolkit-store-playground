import React from "react";
import type { Product } from "../../types/product";
import Grid from "@mui/material/Grid";
import ProductItem from "./components/Product/Product";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
