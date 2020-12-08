import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import { v4 as uuidv4 } from 'uuid';

export default function CounterGroup({ numCounter = 0, onSumChange }) {
    const [counterVals, setCounterVals] = useState([]);

    useEffect(
        () => {
            setCounterVals(new Array(numCounter > 0 ? numCounter : 0).fill(0))
        },
        [numCounter]);

    useEffect(() => {
        onSumChange(counterVals.reduce((a, b) => a + b, 0))
    }, [counterVals])

    return (
        <div >
            {counterVals.map(((val, index) => {
                return (
                    < Counter key={uuidv4()} initCount={val}
                        onCountChange={(newCount) => {
                            const newCounterVals = counterVals.slice()
                            newCounterVals[index] = newCount;
                            setCounterVals(newCounterVals);
                        }}
                    />)
            }
            ))}
        </div>
    )
}

CounterGroup.propTypes = {
    numCounter: PropTypes.number,
    onSumChange: PropTypes.func
}
