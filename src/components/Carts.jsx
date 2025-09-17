import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import { useAppDispatch } from "../hooks/hooks";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { clearCart, removeFromCart } from "../store/cartSlice";
const Carts = () => {
  const products = useSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  return (
    <div>
      <Button>Hello here</Button>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Card key={product.id} style={{ padding: "10px" }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ objectFit: "cover", maxHeight: "100px" }}
            />
            <CardContent>
              <Typography>{product.title}</Typography>
              <p>{product.price}</p>
            </CardContent>
            <Button
              onClick={() => {
                dispatch(removeFromCart(product));
              }}
            >
              Remove From Cart
            </Button>
          </Card>
        ))}
        <Button
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear Cart
        </Button>
      </Grid>
    </div>
  );
};

export default Carts;
