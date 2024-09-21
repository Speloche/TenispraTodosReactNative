import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemCart: (state, action) => {
            const { id, price, quantity } = action.payload;
            const itemFound = state.items.find(item => item.id === id);
            if (itemFound) {
                itemFound.quantity += quantity; 
            } else {
                state.items.push(action.payload); 
            }
            state.total += price * quantity; 
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        },
        removeItemCart: (state, action) => {
            const itemId = action.payload; 
            const itemIndex = state.items.findIndex(item => item.id === itemId);
            if (itemIndex >= 0) {
                const itemPrice = state.items[itemIndex].price * state.items[itemIndex].quantity;
                state.total -= itemPrice; 
                state.items.splice(itemIndex, 1); 
            }
        },
    },
});

export const { addItemCart, clearCart, removeItemCart } = cartSlice.actions;

export default cartSlice.reducer;
