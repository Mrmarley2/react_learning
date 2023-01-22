import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    // naming the slice state to balance
    name: "balance",
    
    // setting the initial state of the value to 0
    initialState: {
        value: 0,
    },
    
    reducers: {

        // creates the event handler for the increase button
        // rounds to 2dp as this is currency
        increase: (state, action) => {
            state.value += action.payload;
            state.value = state.value.toFixed(2);
        },

        // creates the event handler for the decrease button
        // rounds to 2dp as this is currency
        decrease: (state, action) => {
            state.value -= action.payload;
            state.value = state.value.toFixed(2);
        },

        // creates the event handler for the interest button
        // rounds to 2dp as this is currency
        interest: (state) => {
            state.value = state.value * 1.05;
            state.value = state.value.toFixed(2);
        },

        // creates the event handler for the charges button
        // rounds to 2dp as this is currency
        charges: (state) => {
            state.value = state.value * 0.85;
            state.value = state.value.toFixed(2);
        },
    },
});

// exporting the action creators to use in App.js
export const { increase, decrease, interest, charges } = counterSlice.actions;

// Exporting the reducer function
export default counterSlice.reducer;