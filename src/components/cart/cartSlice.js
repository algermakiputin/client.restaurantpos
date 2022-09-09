import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lineItems: [],
    total: 0,
    isPaying: false,
    paid: false
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addLineItem: (state, action) => {
            const itemExist = state?.lineItems?.some((item) => item.id === action.payload.id);
            let lineItems = [];
            if (itemExist) {
                lineItems = state.lineItems.map(
                    (item) => item.id === action.payload.id ? 
                        {...item, quantity: item.quantity + 1} : item); 
            }else {
                lineItems = [
                    ...state.lineItems,
                    action.payload
                ];
            }  
            return {
                total: recalculate(lineItems),
                lineItems: lineItems
            }
        },
        removeItem: (state, action) => {  
            const lineItems = state.lineItems.filter((item) => (item.id !== action.payload)); 
            return {
                total: recalculate(lineItems),
                lineItems: lineItems
            }
        },
        emptyCart: (state) => { 
            return {
                total: 0,
                lineItems: []
            };
        },
        descreaseQuantity: (state, action) => {
            const lineItems = state?.lineItems?.map(
                (item) => item.id === action.payload ? 
                    {...item, quantity: item.quantity - 1} : item); 
            return {
                total: recalculate(lineItems),
                lineItems: lineItems
            }
        },
        increaseQuantity: (state, action) => {  
            const lineItems = state?.lineItems?.map(
                (item) => item.id === action.payload ? 
                    {...item, quantity: item.quantity + 1} : item); 
            return {
                total: recalculate(lineItems),
                lineItems: lineItems
            } 
        }, 
        setPaying: (state, action) => { 
            return {
                ...state,
                isPaying: action.payload
            }
        },
        setPaid: (state, action) => {
            console.log(action);
            return {
                ...state,
                paid: action.payload
            }
        },
        resetCart: () => {
            return initialState;
        }
    }
});

function recalculate(lineItems) {
    return lineItems?.reduce(
        (partialSum, item) =>  partialSum + (item.price * item.quantity), 0);
}

export const { 
    addLineItem, 
    removeItem, 
    emptyCart, 
    descreaseQuantity, 
    increaseQuantity,
    setPaying,
    setPaid,
    resetCart
} = cartSlice.actions;
export default cartSlice.reducer;