import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("product/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    setProduct(state, action) {
      return action.payload;
    },
  },
  extraReducers(builder){
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload
    })
  }
});
export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
