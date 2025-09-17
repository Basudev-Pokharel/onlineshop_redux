import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
};
const api = "https://fakestoreapi.com/products";
export const fetchProducts = createAsyncThunk("products/products", async () => {
  const response = await axios.get(api);
  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});
export default productSlice.reducer;
