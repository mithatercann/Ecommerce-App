import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addToCart: (state, action) => {
      if (!state.data.some((item) => item.id === action.payload.id)) {
        state.data = [...state.data, action.payload];
      } else {
        //Check if the cart has the same product , then change the product.
        state.data = state.data.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...action.payload,
              quantity: item.quantity, // Keeps the quantity of the product.
            };
          } else {
            return {
              ...item,
            };
          }
        });
      }
    },
    removeFromCart: (state, action) => {
      state.data = state.data.filter(
        (product) => product.id !== action.payload
      );
    },
    changeQuantity: (state, action) => {
      state.data = state.data.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: action.payload.quantity,
            // If there is the item then change the quantity with given amount.
          };
        } else {
          return {
            ...product,
          };
        }
      });
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
