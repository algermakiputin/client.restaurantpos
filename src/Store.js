import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./components/cart/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice
    },
})

export default store;