import React, { useState } from "react";

function CompCalc() {
    const [values, setValues] = useState({
        initVal: "",
        contrib: "",
        time: "",
        interest: "",
        total: 0
    });

    const calculate = () => {
        const { initVal, contrib, time, interest } = values;

        // Parse the input values for calculation
        const parsedInitVal = parseFloat(initVal);
        const parsedContrib = parseFloat(contrib);
        const parsedTime = parseFloat(time);
        const parsedInterest = parseFloat(interest);

        // Validate inputs and handle the division by 0 case
        if (isNaN(parsedInitVal) || isNaN(parsedContrib) || isNaN(parsedTime) || isNaN(parsedInterest) || parsedInterest === 0) {
            setValues({ ...values, total: "Invalid input" });
            return;
        }

        const total = parsedInitVal * Math.pow(1 + (parsedInterest / 100), parsedTime) + 
            (parsedContrib * 12) * ((Math.pow(1 + (parsedInterest / 100), parsedTime) - 1) / (parsedInterest / 100));

        setValues(v => ({...v, total: Math.round(total).toLocaleString()}));
    };

    const inputChange = (event) => {
        const { name, value } = event.target;
        setValues(v => ({...v, [name]: value}));
    };

    return(
        <div className="calcBody">
            <h1 className="title"> = Compound Calculation = </h1>
            <div className="input">
                <label>Current Investment</label>
                <input 
                    type="number"
                    name="initVal" 
                    value={values.initVal} 
                    placeholder="1,000,000.00"
                    onChange={inputChange} />
            </div>
            <div  className="input">
                <label>Monthly Contribution</label>
                <input 
                    type="number"
                    name="contrib"  
                    value={values.contrib} 
                    placeholder="5,000"
                    onChange={inputChange} />
            </div>
            <div  className="input">
                <label>Years of Growth</label>
                <input 
                    type="number" 
                    name="time" 
                    value={values.time} 
                    placeholder="10 years"
                    onChange={inputChange} />
            </div>
            <div className="input">
                <label>Interest Rate</label>
                <input 
                    type="number" 
                    name="interest" 
                    value={values.interest} 
                    placeholder="8%"
                    onChange={inputChange} />
            </div>
            <button className="calculate" onClick={calculate}>Calculate</button>
            <div className="input">
                <h3>Compound Result</h3>
                <h3>Your money in {values.time} years is: {values.total}</h3>
            </div>
        </div>
    );
}

export default CompCalc;