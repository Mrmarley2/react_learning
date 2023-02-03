import { configureStore } from "@reduxjs/toolkit";
import balanceReducer from "./balance";

// setting up the empty store for form use
export default configureStore({
    reducer: {
        balance: balanceReducer,
    },
});
