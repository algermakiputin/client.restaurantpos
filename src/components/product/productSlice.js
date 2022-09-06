import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        all: [],
        result: []
    },
    reducers: {
        setProducts: (state, action) => { 
            return {
                result: [
                    ...state.all,
                    ...action.payload
                ],
                all: [
                    ...state.all,
                    ...action.payload
                ]
            }
        },
        search: (state, action) => {  
            return {
                result: state.all.filter((item) => item.name.toLowerCase().includes(action.payload.toLowerCase())),
                all: state.all
            };
        },
        filterCategory: (state, action) => {
            return {
                result: state.all.filter((item) => item.category_id === Number(action.payload) || action.payload === ''),
                all: state.all
            };
        }
    }
});

export const { setProducts, search, filterCategory } = productSlice.actions;
export default productSlice.reducer;