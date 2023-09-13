import React, { useMemo } from "react";
import { Stack, Card, Box, CardMedia, Typography, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCartProducts } from "../../feature/cart/cart";
import { removeProduct } from "../../feature/cart/cart";
import { Product } from "../../types/product";

interface CartProduct extends Product {
  quantity: number;
}

const Cart = () => {
  const products = useAppSelector(selectCartProducts);
  const dispatch = useAppDispatch();

  const aggrProducts = useMemo(() => aggregateProducts(products), [products]);

  function aggregateProducts(products: Product[]) {
    return products.reduce((acc, product) => {
      const existingProduct = acc.find((p) => p.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        acc.push({ ...product, quantity: 1 });
      }
      return acc;
    }, [] as CartProduct[]);
  }
  return (
    <Stack sx={{ minWidth: "300px" }}>
      <Stack spacing={2}>
        {aggrProducts.map((product) => (
          <Card
            key={product.id}
            elevation={0}
            sx={{ border: "1px solid #d2d2d2", padding: ".5rem" }}
          >
            <Stack direction="row" spacing={2}>
              <CardMedia
                component="img"
                image={product.image}
                sx={{
                  width: "60px",
                  height: "60px",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
              <Box>
                <Typography sx={{ fontSize: "1rem" }}>
                  {product.title}
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>
                  Amount: {product.quantity}
                </Typography>
                <Button onClick={() => dispatch(removeProduct(product))}>
                  Remove
                </Button>
              </Box>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default Cart;
