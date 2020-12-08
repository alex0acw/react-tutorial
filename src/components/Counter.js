import React, { Component, useState, useEffect } from 'react'
import "./Counter.css"

export default function Counter({ increase, decrease }) {
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(count + 1);
        increase();
    }
    const onDecrease = () => {
        setCount(count - 1);
        decrease();
    }


    return (
        <div className="counter" style={{ height: "35px", backgroundColor: "black", margin: "5px" }}>
            <input type="button" value="+" onClick={onIncrease}></input>
            <span style={{ width: "100%" }}>{count}</span>
            <input type="button" value="-" onClick={onDecrease}></input>
        </div >

    )
}
