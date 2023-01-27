import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeFromCart(state, action) {
      return state.filter((product) => product.id !== action.payload);
    },
    emptyCart() {
      return [];
    },
    incQty(state, action) {
      return state.map((product) => {
        if (Number(product.id) === Number(action.payload)) {
          return { ...product, qty: product.qty + 1 };
        } else {
          return product;
        }
      });
    },
    decQty(state, action) {
      return state.map((product) => {
        if (Number(product.id) === Number(action.payload)) {
          return { ...product, qty: product.qty - 1 };
        } else {
          return product;
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, incQty, decQty } =
  cartSlice.actions;
export default cartSlice.reducer;
