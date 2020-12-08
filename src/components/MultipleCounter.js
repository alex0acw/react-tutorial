import { useState } from 'react';
import CounterGroupSum from './CounterGroupSum';
import CounterSizeGeneratorContainer from '../containers/CounterSizeGeneratorContainer';
import CounterGroupContainer from '../containers/CounterGroupContainer';
import "./MultipleCounter.css"
import CounterGroupSumContainer from '../containers/CounterGroupSumContainer';

export default function () {
    const [numCounter, setnumCounter] = useState(0);
    const [sum, setSum] = useState(0)

    return (
        <div className={"multiple-counter"} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CounterSizeGeneratorContainer />
            <CounterGroupSumContainer/>
            <CounterGroupContainer />
        </div>
    );
}