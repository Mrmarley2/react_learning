import { useState } from 'react';
import React from 'react';

// creating the calculation section
// researched forms in React: https://www.w3schools.com/react/react_forms.asp
function CalculateSection() {
        const [amount, setAmount] = useState("");
        const [months, setMonths] = useState("");

        const handleSubmit = (event) => {
        event.preventDefault();
        
        // first calculating interest
        // then calculates total and uses total to find monthly
        let interest = amount * 0.2 * (months/12);
        let finalTotal = (Number(amount) + Number(interest));
        let finalMonthly = finalTotal / Number(months);

        // handling potential errors
        if(isNaN(finalTotal) || finalMonthly === Infinity || finalMonthly === 0){
            alert("You are missing a value. Please check and try again.");
        } else {
            // outputs the final values as an alert
            alert(`Total per Month: £${finalMonthly}\nTotal Amount: £${finalTotal}`)
        }
    }

    // input fields restricted to numbers to reduce errors
    return(
        <div className="calc-section">
            <form className="calc-values" onSubmit={handleSubmit}>
                <label>Amount in £ Sterling
                    <input 
                        className="form-box"
                        type="number"
                        min="1"
                        step="any"
                        id="value-box"
                        name="value-box"
                        placeholder="500"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                <label>Number of Months
                    <input 
                        className="form-box"
                        type="number"
                        min="1"
                        step="1"
                        id="month-box"
                        name="month-box"
                        placeholder="12"
                        value={months}
                        onChange={(e) => setMonths(e.target.value)}
                    />
                </label>                  
                <input  className="form-box" type="submit"  id="submit-box" value="Calculate"></input>                    
            </form>
        </div>
    )
}

// creating section to contain calculated values and supporting text
const calcSection = (
    <div className="calc-container top-space">
        <h3>Shopping Interest Calculator</h3>
        <h6>
            Please enter the total value of your shopping and how how many months you'd like to pay it back over into the boxes below.
        </h6>
        <h6>
            You'll then get the amount you will need to pay each month, as well as the total amount you will pay over the period.
        </h6>
        <CalculateSection />
    </div>
    )

// final component
export default function Calculator() {
    return(
        <div className="container">
            {calcSection}
        </div>        
    )            
}