import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addLineItem: (state, action) => {
            const itemExist = state.some((item) => item.id === action.payload.id); 
            if (itemExist) {
                return state.map(
                    (item) => item.id === action.payload.id ? 
                        {...item, quantity: item.quantity + 1} : item); 
            }else {
                return [
                    ...state,
                    action.payload
                ];
            } 
        },
        removeItem: (state, action) => {  
            return state.filter((item) => (item.id !== action.payload)); 
        },
        emptyCart: (state) => { 
            return [];
        },
        descreaseQuantity: (state, action) => {
            return state.map(
                (item) => item.id === action.payload ? 
                    {...item, quantity: item.quantity - 1} : item); 
        },
        increaseQuantity: (state, action) => {  
            return state.map(
                (item) => item.id === action.payload ? 
                    {...item, quantity: item.quantity + 1} : item); 
        }
    }
});

export const { addLineItem, removeItem, emptyCart, descreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;