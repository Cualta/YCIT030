import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useEffect, useState } from "react";

import { Product } from "./Product";
import { useDialogStore } from "../store";

const cache = {};

export function ProductDialogDetails() {
  const { dialogState, open, close, getResult } = useDialogStore();

  const isOpen = dialogState === "opened";

  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${selectedProduct}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("got product details");
        setSelectedProduct(data);
      });
  }, []);

  useEffect(() => {
    if (cache[selectedProduct]) {
      setSelectedProduct(cache[selectedProduct]);
      return;
    }

    fetch(`https://fakestoreapi.com/products/${selectedProduct}`)
      .then((res) => res.json())
      .then(
        (data) => {
          console.log("got product details");
          setSelectedProduct(data);
        },
        [selectedProduct]
      );
  });

  return (
    <>
      <Dialog
        open={dialogState === "opened"}
        PaperProps={{ sx: { width: "30%", height: "80%" } }}
      >
        <DialogTitle>Product Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Product key={selectedProduct.id} {...selectedProduct} />
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => close("no")}>Close</Button>
            <Button onClick={() => close("yes")}>Add to Cart</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
}
