import Paper from "@mui/material/Paper";
import styled from "styled-components";
import Box from "@mui/material/Box";

export const ProductCard = styled(Paper)`
  height: 450px;
`;

export const ContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
`;
