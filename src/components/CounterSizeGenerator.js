export default function CounterSizeGenerator({ updateCountSize }) {
    return (
        <div className="counter-size-generator" >
            <input type="number" min="0" defaultValue={0} onChange={(e) => {
                updateCountSize?.(parseInt(e.target.value));
            }}></input>
        </div >
    )
}