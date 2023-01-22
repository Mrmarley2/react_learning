// Importing the useSelector and useDispatch functions to select the required
// slices of state
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { decrease, increase, interest, charges } from "./store/balance"
import './App.css';

function App() {
  // hook to define user input
  const [userInput, setUserInput] = useState(0);

  const decreaseEvent = (event) => {
    event.preventDefault();
    dispatch(decrease(Number(userInput)));
    setUserInput(0)
  };

  const increaseEvent = (event) => {
    event.preventDefault();
    dispatch(increase(Number(userInput)));
    setUserInput(0)
  };

  // useSelector to find the required slices of state
  const balance = useSelector((state) => state.balance.value);

  // Initiating the dispatch variable using the useDispatch function.
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      {/* Displays the current balance */}
      <div className="value-box">
        <h1>Balance: £{balance}</h1>
      </div>
      <div className="balance-section">
        {/* This is the input value box that will hold the amount to be withdrawn
        or deposited, as well as all the buttons for various events */}
        <form className="balance-form">
          <label>
            Amount:
            {/* input field is numeric to reduce input errors */}
            <input
            type="number"
            name="amount"
            onChange={(e) => setUserInput(e.target.value)}
            value={userInput}
            />
          </label>
          <div className="increase-decrease">            
            <button type="increase" onClick={increaseEvent}>Increase</button>
            <button type="decrease" onClick={decreaseEvent}>Decrease</button>
          </div>          
        </form>
        {/* As interest and charges do not require the value box, they do not have to 
        be within the form */}
        <div className="interest-charges">
          <button onClick={() => dispatch(interest())}>Add Interest</button>
          <button onClick={() => dispatch(charges())}>Charges</button>
        </div>     
      </div>
    </div>
  );
}

export default App;