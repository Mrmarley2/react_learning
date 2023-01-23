import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../components/toDo";

// setting up the empty store for form use
export default configureStore({
    reducer: {
        toDo: toDoReducer,
    },
});
