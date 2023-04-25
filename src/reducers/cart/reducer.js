import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    setCartItem: (state, action) => {
      state.cartItems.push(action.payload)
    },
    deleteCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(game => game.id !== action.payload)
    },
    deleteAllCartItems: (state) => {
      state.cartItems = []
    },
  }
})

export const { setCartItem, deleteCartItem, deleteAllCartItems } = cartSlice.actions;
export default cartSlice.reducer