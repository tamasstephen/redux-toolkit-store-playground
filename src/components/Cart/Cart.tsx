import React from "react";
import { Stack } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectCartProducts } from "../../feature/cart/cart";

const Cart = () => {
  const products = useAppSelector(selectCartProducts);
  return (
    <Stack>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </Stack>
  );
};

export default Cart;
