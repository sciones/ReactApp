import React, { useState } from "react";

function Max401k() {

    const [values, setValues] = useState({
        start: 2000,
        end: 2024,
        interest: 8,
        total: 0,
    });

    const data401k = {
        1984: 7000, 1985: 7000, 1986: 7000, 1987: 7000, 1988: 7000,
        1989: 7000, 1990: 7000, 1991: 7000, 1992: 7000, 1993: 7000,
        1994: 10750, 1995: 10750, 1996: 10750, 1997: 10750,1998: 10750,
        1999: 10750, 2000: 11000, 2001: 11000, 2002: 11000, 2003: 11000,
        2004: 11000, 2005: 15000, 2006: 15000, 2007: 15000, 2008: 15000,
        2009: 16000, 2010: 16000, 2011: 16000, 2012: 17000, 2013: 17000,
        2014: 17000, 2015: 18000, 2016: 18000, 2017: 18500, 2018: 18500,
        2019: 19000, 2020: 19500, 2021: 20000, 2022: 22000, 2023: 22500,
        2024: 23000,
    };

    function inputChange(event) {
        const { name, value } = event.target;
        setValues(v => ({...v, [name]: value}));
    }

    function calculate() {
        const { start, end, interest } = values;
        const parsedStart = parseFloat(start);
        const parsedEnd = parseFloat(end);
        const parsedInterest = parseFloat(interest);

        if (isNaN(parsedStart) || isNaN(parsedEnd) || isNaN(parsedInterest ) || (parsedStart > parsedEnd) || parsedStart < 1984 || parsedEnd > 2024) {
            setValues({ ...values, total: "Invalid input" });
            return;
        }

        let total = 0;
        for (let i = parsedStart; i < parsedEnd; i++) {
            console.log(i, data401k[i]);
            total += data401k[i];
            total *= (1 + parsedInterest/100) 
        }

        setValues(v => ({...v, total: Math.round(total).toLocaleString()}));
    }
    

    return(
        <div className="calcBody">
            <h1 className="title"> 401k Calculation </h1>
            <div className="input">
                <label>Starting Year</label>
                <input 
                    type="number"
                    name="start" 
                    value={values.start} 
                    placeholder="2000"
                    onChange={inputChange} />
            </div>
            <div  className="input">
                <label>Ending Year</label>
                <input 
                    type="number"
                    name="end"  
                    value={values.end} 
                    placeholder="2020"
                    onChange={inputChange} />
            </div>
            <div  className="input">
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
                <p>Your 401k contribution of {values.end - values.start} years<br/>
                    Total accumulation is: {values.total}</p>
            </div>
        </div>
    );
}

export default Max401k;