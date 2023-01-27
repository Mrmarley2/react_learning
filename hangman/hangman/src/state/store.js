import { configureStore }  from "@reduxjs/toolkit";
import hangmanReducer from "./hangman";

// setting up the empty store for form use
export default configureStore({
    reducer: {
        hangman: hangmanReducer,
    },
});
