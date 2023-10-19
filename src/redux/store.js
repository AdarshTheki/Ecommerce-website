import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import filterSlice from './filterSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
    filter: filterSlice,
  },
  middleware: [thunk],
});
