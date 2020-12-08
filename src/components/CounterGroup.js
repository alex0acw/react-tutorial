import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Counter from "./Counter";
import CounterContainer from "../containers/CounterContainer";
import { v4 as uuidv4 } from 'uuid';

export default function CounterGroup({ size }) {
    const [counterVals, setCounterVals] = useState([]);

    useEffect(
        () => {
            setCounterVals(new Array(size > 0 ? size : 0).fill(0))
        },
        [size]);

    return (
        <div >
            {counterVals.map(((val, index) => {
                return (
                    < CounterContainer key={uuidv4()}

                    />)
            }
            ))}
        </div>
    )
}
