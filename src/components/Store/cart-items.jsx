import { createSlice } from "@reduxjs/toolkit";
const cartItemInitialState = {
    items: [],
    totalQuantity: 0,
};

const cartItemSlice = createSlice({
    name: "cart",
    initialState: cartItemInitialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.title,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    existingItem.totalPrice + newItem.price;
            }
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === id
            );
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
    },
});

export const cartItemSliceActions = cartItemSlice.actions;
export default cartItemSlice.reducer;