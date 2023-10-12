import { createSlice } from "@reduxjs/toolkit";

const cartShowInitialState = { isShown: false, notification: null };

const cartSlice = createSlice({
    name: "cartToggle",
    initialState: cartShowInitialState,
    reducers: {
        toggle(state) {
            state.isShown = !state.isShown;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            };
        },
    },
});

export const cartUiActions = cartSlice.actions;
export default cartSlice.reducer;
