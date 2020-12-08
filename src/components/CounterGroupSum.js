import PropTypes from "prop-types";
export default function CounterGroupSum({ sum = 0 }) {
    return (
        <div style={{ display: "flex" }}>
            <span>Sum of all counters' value is&nbsp;</span><span>{sum}</span>
        </div>
    )
}
CounterGroupSum.propTypes = {
  sum: PropTypes.number
}
