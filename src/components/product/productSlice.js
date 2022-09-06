import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: [{
        id: '125125',
        name: 'test',
        price: 1,
        quantity: 1
    }],
    reducers: {
        setProducts: (state, action) => {
            console.log(action);
            return [
                ...state,
                ...action.payload
            ]
        }
    }
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;