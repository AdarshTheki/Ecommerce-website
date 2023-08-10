import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer:{
    products: productReducer,
    cart: cartReducer
  },
  middleware: [thunk]
})