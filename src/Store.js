import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./components/cart/cartSlice";
import productSlice from "./components/product/productSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice
    },
})

export default store;