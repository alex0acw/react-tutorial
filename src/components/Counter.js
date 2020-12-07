import React, { Component, useState, useEffect } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    
    const onIncrease = () => {
        setCount(count + 1);
    }
    const onDecrease = () => {
        setCount(count - 1);
    }

    return (
        <section className="counter">
            <input type="button" value="+" onClick={onIncrease}></input>
            <span>{count}</span>
            <input type="button" value="-" onClick={onDecrease}></input>
        </section>

    )
}
