export default function CounterSizeGenerator({ initNum, onNumChange }) {
    return (
        <div>
            <input type="number" defaultValue={initNum} onChange={(e) => {
                onNumChange?.(parseInt(e.target.value));
            }}></input>
        </div>
    )
}