import { createSlice } from "@reduxjs/toolkit";

const cartShowInitialState = { isShown: false };

const cartSlice = createSlice({
    name: "cartToggle",
    initialState: cartShowInitialState,
    reducers: {
        toggle(state) {
            state.isShown = !state.isShown;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;

