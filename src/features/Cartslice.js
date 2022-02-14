import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 



const initialState  = {
    products: [],
    totalPrice: 0,
  };
  
 
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action ) => {
      // check if product already exists

      let alreadyExists  = false;

      state.products.forEach((o) => {
        if (o.product._id === action.payload.product._id) {
          alreadyExists = true;
        }
      });

      if (alreadyExists) {
        // if exists then increment the quantity
        state.products.map((o) => {
          if (o.product._id === action.payload.product._id) {
            o.quantity += 1;
            state.totalPrice = state.totalPrice + o.product.price;
          }
        });
      } else {
        // add new product to the cart
        return {
          totalPrice:
            state.totalPrice +
            action.payload.product.price * action.payload.quantity,
          products: [...state.products, action.payload],
        };
      }
    },

    incrementQuantity: (state, action ) => {
      console.log(action.payload)
      // increment the quantity of product
      state.products.map((product) => {
        if (product.product._id === action.payload) {
          product.quantity++;
          state.totalPrice = state.totalPrice + product.product.price;
        }
      });
    },

    decrementQuantity: (state, action ) => {
      // decrement the quantity of product
      state.products.map((product) => {
        if (product.product._id === action.payload) {
          if (product.quantity > 0) {
            product.quantity--;
            state.totalPrice = state.totalPrice - product.product.price;
          }

          if (product.quantity === 0) {
            // remove from the cart if product quantity becomes 0
            state.products = state.products.filter((product) => {
              if (product.product._id !== action.payload) return product;
            });
          }
        }
      });
    },

    clearCart: (state, action ) => {
      // clear the cart
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, incrementQuantity, decrementQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;