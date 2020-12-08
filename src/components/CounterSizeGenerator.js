import PropTypes from "prop-types";
export default function CounterSizeGenerator({ initNum = 0, updateCountSize }) {
    return (
        <div className="counter-size-generator" >
            <input type="number" min="0" defaultValue={initNum} onChange={(e) => {
                updateCountSize?.(parseInt(e.target.value));
            }}></input>
        </div>
    )
}
CounterSizeGenerator.propTypes = {
    initNum: PropTypes.number,
    onNumChange: PropTypes.func
}
