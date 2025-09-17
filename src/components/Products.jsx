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
import { addToCart } from "../store/cartSlice";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <p>{products.length}</p>
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
                dispatch(addToCart(product));
              }}
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
