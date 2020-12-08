import React, { Component, useState, useEffect } from 'react'
import "./Counter.css"

export default function Counter({ initCount, onCountChange }) {
    const [count, setCount] = useState(initCount);

    useEffect(() => {
        setCount(initCount)
    }, [initCount])

    const onIncrease = () => {
        setCount(count + 1);
        onCountChange(count + 1)
    }
    const onDecrease = () => {
        setCount(count - 1);
        onCountChange(count - 1)
    }

    const buttonStyle = {
        width: "10px"
    }

    return (
        <div className="counter" style={{ height: "35px", backgroundColor: "black", margin: "5px" }}>
            <input type="button" style={buttonStyle} value="+" onClick={onIncrease}></input>
            <span style={{ width: "100%" }}>{count}</span>
            <input type="button" style={buttonStyle} value="-" onClick={onDecrease}></input>
        </div >

    )
}

