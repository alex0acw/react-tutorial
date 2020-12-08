import { useEffect, useState } from "react";
import Counter from "./Counter";

export default function ({ numCounter = 0, onSumChange }) {
    const [counterVals, setCounterVals] = useState([]);

    useEffect(() => {
        setCounterVals(new Array(numCounter > 0 ? numCounter : 0).fill(0))
    }, [numCounter]);
    
    useEffect(() => {
        onSumChange(counterVals.reduce((a, b) => a + b, 0))
    }, [counterVals])

    return (
        <div >
            {counterVals.map(((val, index) => {
                return (
                    < Counter key={index} initCount={val}
                        onCountChange={(x) => {
                            const newCounterVals = counterVals.slice()
                            newCounterVals[index] = x;
                            setCounterVals(newCounterVals);
                        }}
                    />)
            }
            ))}
        </div>
    )
}