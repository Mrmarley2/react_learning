import { configureStore }  from "@reduxjs/toolkit";
import todoReducer from "./todo";

// setting up the empty store for form use
export default configureStore({
    reducer: {
        todo: todoReducer,
    },
});
