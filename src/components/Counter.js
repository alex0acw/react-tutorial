import React, { Component, useState, useEffect } from 'react'
import "./Counter.css"

// export default function Counter({ initCount, onCountChange, }) {
//     const [count, setCount] = useState(initCount);

//     useEffect(() => {
//         setCount(initCount)
//     }, [initCount])

//     const onIncrease = () => {
//         setCount(count + 1);
//         onCountChange(count + 1)
//     }
//     const onDecrease = () => {
//         setCount(count - 1);
//         onCountChange(count - 1)
//     }


//     return (
//         <div className="counter" style={{ height: "35px", backgroundColor: "black", margin: "5px" }}>
//             <input type="button" style={buttonStyle} value="+" onClick={onIncrease}></input>
//             <span style={{ width: "100%" }}>{count}</span>
//             <input type="button" style={buttonStyle} value="-" onClick={onDecrease}></input>
//         </div >

//     )
// }

class Counter extends Component {

    buttonStyle = {
        width: "10px"
    }
    constructor() {
        super()
        this.state = { value: 0 };
    }

    increase = () => {
        this.setState({ value: this.state.value + 1 })
        this.props.increase();
    }
    decrease = () => {
        this.setState({ value: this.state.value - 1 });
        this.props.decrease();
    }

    render() {
        return (
            <div className="counter" style={{ height: "35px", backgroundColor: "black", margin: "5px" }}>
                <input type="button" value="+" onClick={this.increase} />
                <span style={{ width: "100%" }}>{this.state.value}</span>
                <input type="button" value="-" onClick={this.decrease} />
            </div >
        )
    }
}
export default Counter;