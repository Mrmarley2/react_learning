// used this YouTube tutorial on Redux for better understanding
// https://www.youtube.com/watch?v=9jULHSe41ls
import { createSlice } from "@reduxjs/toolkit";
export const todoSlice = createSlice({ 
    name: "todo",

    // app works best with no inital data, so initial item does not have to be altered
    // todo list starts blank so user can add what they like
    initialState: {
        nextID: 1,
        data:
        {
            
        }
    },

    reducers: {
        add: (state, action) => {
            // researched Object.assign:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
            // adds new object to state using next id number as ComputedPropertyName (researched below)
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
            // first creates a copy of the existing data
            // then adds the new item to the copied object
            // then overwrites the existing data in state with the updated object
            let updatedData = state.data;
            updatedData = Object.assign(state.data, {[state.nextID]: {content: action.payload, completed: false, editing: false}});
            state.data = updatedData;            
            
            // adds one to nextID ready for next addition to the list
            state.nextID += 1;
        },

        // removes the selected todo list item from the object
        // first creates a copy of the existing data
        // then deletes the correct item from the copied object
        // then overwrites the existing data in state with the updated object
        remove: (state, action) => {      
            let removing = state.data;       
            delete removing[action.payload];
            state.data = removing;
        },

        // changes the completed boolean value from true to false or vice versa
        // first creates a copy of the existing data
        // then updates the completed property with the required values
        // then overwrites the existing data in state with the updated object
        complete: (state, action) => {
            let completing = state.data[action.payload];
            completing = {content: completing["content"],
                                          completed: !completing["completed"],
                                          editing: completing["editing"]
                                        }
            state.data[action.payload] = completing;                             
        },
        
        // changes the editing boolean value from true to false or vice versa
        // first creates a copy of the existing data
        // then checks to prevent blank values being added from edit and for edit status
        // if no editing = false, changes edit status
        // if editing = true, 
        // then updates the editing property with the required values
        // then overwrites the existing data in state with the updated object
        change: (state, action) => {
            let editing = state.data[action.payload[0]];

            if(editing["editing"] == true & action.payload[1]!=""){
                editing = {content: action.payload[1],
                completed: editing["completed"],
                editing: !editing["editing"]
              }
            } else {
                editing = {content: editing["content"],
                completed: editing["completed"],
                editing: !editing["editing"]
              }
            }

            state.data[action.payload[0]] = editing;
        }

          
    },
});

// exporting the action creators to use in App.js
export const { add, remove, complete, change } = todoSlice.actions;

// Exporting the reducer function
export default todoSlice.reducer;

