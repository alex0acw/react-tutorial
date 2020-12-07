import React, { Component, useState, useEffect } from 'react'
import "./Counter.css"

export default function Counter() {
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(count + 1);
    }
    const onDecrease = () => {
        setCount(count - 1);
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
