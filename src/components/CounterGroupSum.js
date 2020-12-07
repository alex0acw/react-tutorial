export default function ({ sum = 0 }) {
    return (
        <div style={{ display: "flex" }}>
            <span>Sum of all counters' value is&nbsp;</span><span>{sum}</span>
        </div>
    )
}