import PropTypes from "prop-types";
export default function CounterSizeGenerator({ initNum = 0, onNumChange }) {
    return (
        <div>
            <input type="number" min="0" defaultValue={initNum} onChange={(e) => {
                onNumChange?.(parseInt(e.target.value));
            }}></input>
        </div>
    )
}
CounterSizeGenerator.propTypes = {
    initNum: PropTypes.number,
    onNumChange: PropTypes.func
}
