import React, { useState } from "react";

function Disbursement() {
    const [values, setValues] = useState({
        total: "",
        disbursement: "",
        interest: "",
        years: "",
    });

    const [yearlyData, setYearlyData] = useState([]);

    const calculate = () => {
        const { total, disbursement, interest, years } = values;

        const parsedTotal = parseFloat(total);
        const parsedDisbursement = parseFloat(disbursement);
        const parsedInterest = parseFloat(interest);
        const parsedYears = parseFloat(years);

        if (isNaN(parsedTotal) || isNaN(parsedDisbursement) || isNaN(parsedInterest)) {
            setYearlyData([{ year: 1, error: "Invalid input" }]);
            return;
        }

        // Generate the yearly data
        let currentBalance = parsedTotal;
        const data = [];

        for (let year = 1; year <= parsedYears; year++) {
            const disburseAmount = currentBalance * (parsedDisbursement / 100);
            currentBalance = currentBalance - disburseAmount;
            const interestGain = currentBalance * (parsedInterest / 100);
            currentBalance += interestGain;

            data.push({
                year,
                disburseAmount: Math.round(disburseAmount).toLocaleString(),
                interestGain: Math.round(interestGain).toLocaleString(),
                remainingBalance: Math.round(currentBalance).toLocaleString()
            });

            if (currentBalance <= 0) break; // Stop calculation if balance becomes 0 or less
        }

        setYearlyData(data);
    };

    const inputChange = (event) => {
        const { name, value } = event.target;
        setValues(v => ({...v,[name]: value}));
    };

    return (
        <div className="calcBody">
            <h1 className="title"> Disbursement Calculator </h1>
            <div className="input">
                <label>Current Investment</label>
                <input 
                    type="number" 
                    name="total" 
                    value={values.total} 
                    placeholder="1,000,000.00"
                    onChange={inputChange} />
            </div>
            <div className="input">
                <label>Disbursement %</label>
                <input 
                    type="number" 
                    name="disbursement" 
                    value={values.disbursement} 
                    placeholder="4%"
                    onChange={inputChange} />
            </div>
            <div className="input">
                <label>Interest Gain %</label>
                <input 
                    type="number" 
                    name="interest" 
                    value={values.interest} 
                    placeholder="6%"
                    onChange={inputChange} />
            </div>
            <div className="input">
                <label>Withdrawal Years</label>
                <input 
                    type="number" 
                    name="years" 
                    value={values.years} 
                    placeholder="30 years"
                    onChange={inputChange} />
            </div>
            <button className="calculate" onClick={calculate}>Calculate</button>

            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Disbursed Amount</th>
                        <th>Interest Gain</th>
                        <th>Remaining Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {yearlyData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.year}</td>
                            <td>{data.disburseAmount}</td>
                            <td>{data.interestGain}</td>
                            <td>{data.remainingBalance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Disbursement;