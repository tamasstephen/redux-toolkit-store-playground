import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Cart from "../Cart/Cart";

const Modal = ({
  isOpen,
  setClose,
}: {
  isOpen: boolean;
  setClose: () => void;
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogTitle>Cart</DialogTitle>
      <DialogContent>
        <Cart />
      </DialogContent>
      <DialogActions>
        <Button onClick={setClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
