import type { Product } from "../../../../types/product";
import { ProductCard, ContentWrapper } from "./Product.styled";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "../../../../app/hooks";
import { addProduct } from "../../../../feature/cart/cart";

function truncat(str: string, length: number = 125) {
  if (str.length < length) {
    return str;
  }
  const newStr = `${str.substring(0, length - 3)}...`;
  return newStr;
}

const Product = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();

  return (
    <ProductCard elevation={2}>
      <CardMedia
        sx={{ height: 175 }}
        image={product.image}
        title={`Alt image for ${product.title}`}
      />
      <ContentWrapper>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {truncat(product.title, 50)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncat(product.description)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => dispatch(addProduct(product))}>
            Add to Cart
          </Button>
        </CardActions>
      </ContentWrapper>
    </ProductCard>
  );
};

export default Product;
