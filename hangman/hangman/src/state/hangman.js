import { createSlice } from "@reduxjs/toolkit";
export const hangmanSlice = createSlice({
    name: "hangman",

    initialState: {
         // array of words for hangman
        // words generated at https://random-word-api.herokuapp.com/
        words: ["hexachlorethane","utilitarianisms","adenocarcinomas",
                "coeducationally","changefulnesses","overengineering",
                "prekindergarten","barbarousnesses","instructiveness",
                "deconsecrations","rudimentariness","translatability",
                "untheoretical","gastronomists","dumbfoundered",
                "myrmecologist","peptidoglycan","convocational",
                "verticalness","unfruitfully","hyperostotic"],
        incorrect: 0
    },

    reducers: {
/*         wordChange: (state, action) => {
            let newData = state;
            newData = {word: action.payload, incorrect: state.incorrect};
            state = newData;
        } */
    }
})


// exporting the action creators to use in App.js
export const { } = hangmanSlice.actions;

// Exporting the reducer function
export default hangmanSlice.reducer;