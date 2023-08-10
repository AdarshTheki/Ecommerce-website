import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty++;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    clearAllCart() {
      return [];
    },
    increaseQty(state, action) {
      const itemToUpdate = state.find((item) => item.id === action.payload.id);
      if (itemToUpdate) {
        itemToUpdate.qty++;
      }
    },
    decreaseQty(state, action) {
      const itemToUpdate = state.find((item) => item.id === action.payload.id);
      if (itemToUpdate && itemToUpdate.qty > 1) {
        itemToUpdate.qty--;
      }
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  clearAllCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;
