import React, { useState } from "react";
import { StyledAppBar } from "./Navbar.styled";
import { useAppSelector } from "../../app/hooks";
import { selectCartProducts } from "../../feature/cart/cart";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Modal from "../Modal/Modal";

const Navbar = () => {
  const cartProducts = useAppSelector(selectCartProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledAppBar>
      <Container
        maxWidth="xl"
        sx={{
          display: "fex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ecommerce
          </Typography>
        </Toolbar>
        <Typography onClick={() => setIsModalOpen(!isModalOpen)}>
          {cartProducts.length}
        </Typography>
        <Modal isOpen={isModalOpen} setClose={() => setIsModalOpen(false)} />
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
