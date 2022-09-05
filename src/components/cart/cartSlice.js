import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [
        {
            id: '12540',
            name: 'Mang tomas',
            price: 15.25,
            quantity: 4
        },
        {
            id: '550290',
            name: 'Coke 8oz',
            price: 25.5,
            quantity: 2
        },
        {
            id: '5002001',
            name: 'Penongs',
            price: 155.5,
            quantity: 5
        }
    ],
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
            return state.filter((item) => (item.id !== action.payload.id)); 
        },
        emptyCart: (state, action) => {
            console.log(state); 
            return [];
        }
    }
});

export const { addLineItem, removeItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;