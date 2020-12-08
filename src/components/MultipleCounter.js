import { useState } from 'react';
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGenerator from './CounterSizeGenerator';
import CounterGroup from './CounterGroup';

export default function () {
    const [numCounter, setnumCounter] = useState(0);
    const [sum, setSum] = useState(0)

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CounterSizeGenerator
                initNum={0}
                onNumChange={(newNum) => (setnumCounter(newNum))}
            />
            <CounterGroupSum sum={sum}></CounterGroupSum>
            <CounterGroup numCounter={numCounter}
                onSumChange={(newSum) => {
                    setSum(newSum)
                }}
            />
        </div>
    );
}