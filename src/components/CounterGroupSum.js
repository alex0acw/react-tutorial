import { useEffect } from "react"

export default function ({ sum = 0 }) {
    useEffect(() => {
        console.log("sum change")
    }, [sum])
    return (
        <div style={{ display: "flex" }}>
            <span>Sum of all counters' value is&nbsp;</span><span>{sum}</span>
        </div>
    )
}