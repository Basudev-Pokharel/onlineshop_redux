import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productSlice";
import usersReducer from "./userSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
    cart: cartReducer,
  },
});
