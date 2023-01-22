import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./balance";

// setting up the empty store for form use
export default configureStore({
    reducer: {
        counter: counterReducer,
    },
});
