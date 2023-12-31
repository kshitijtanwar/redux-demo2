import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-ui";
import cartItemReducer from "./cart-items";
const store = configureStore({
    reducer: { cart: cartReducer, cartItem: cartItemReducer },
});
export default store;
