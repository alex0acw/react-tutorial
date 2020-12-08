import { connect } from 'react-redux'
import { decreaseSum, increaseSum } from "../redux/actions";
import Counter from "../components/Counter";

const mapDispatchToProps = (dispatch) => ({
    increase: () => { dispatch(increaseSum()) },
    decrease: () => { dispatch(decreaseSum()) },
})


const CounterContainer = connect(null, mapDispatchToProps)(Counter)
export default CounterContainer;