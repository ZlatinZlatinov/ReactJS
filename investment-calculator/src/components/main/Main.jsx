import { useState } from "react";
import Result from "./result/Result";
import UserInput from "./user-input/UserInput";
import { calculateInvestmentResults } from "../../util/investment";

const initialState = {
    initialInvestment: 0,//initialInvestment
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
}

export default function Main() {
    const [appState, setAppstate] = useState(initialState);
    const [result, setResult] = useState([]);

    function onInputUpdate(e) {
        const name = e.target.name;
        const value = Number(e.target.value);

        setAppstate((old) => {
            return {
                ...old,
                [name]: value// overrides a single property of th old object
            }
        });

        if (appState.annualInvestment && appState.duration && appState.expectedReturn && appState.initialInvestment) {
            const newResult = calculateInvestmentResults(appState);

            setResult(newResult.map((obj) => {
                return {
                    valueEndOfYear: obj.valueEndOfYear,
                    interest: obj.interest,
                    investedCapital: (appState.annualInvestment * obj.year + appState.initialInvestment),
                    year: obj.year, 
                    totalInterest: obj.valueEndOfYear - obj.annualInvestment * obj.year - appState.initialInvestment
                }
            }));
        } else {
            setResult([]);
        }
    }

    return (
        <main>
            <UserInput appState={appState} onInputUpdate={onInputUpdate} />

            <Result result={result} />
        </main>
    );
}