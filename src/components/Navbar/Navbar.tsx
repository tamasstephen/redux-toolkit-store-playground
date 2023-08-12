import { StyledAppBar } from "./Navbar.styled";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCartProducts } from "../../feature/cart/cart";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const cartProducts = useAppSelector(selectCartProducts);

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
        <Typography>{cartProducts.length}</Typography>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;
