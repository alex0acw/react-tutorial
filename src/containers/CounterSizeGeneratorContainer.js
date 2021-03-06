import { connect } from 'react-redux'
import { updateCountSize, reset } from "../redux/actions";
import CounterSizeGenerator from "../components/CounterSizeGenerator";

const mapDispatchToProps = dispatch => ({
    updateCountSize: (size) => {
        dispatch(updateCountSize(size));
        dispatch(reset())
    }
})

const CounterSizeGeneratorContainer = connect(null, mapDispatchToProps)(CounterSizeGenerator)
export default CounterSizeGeneratorContainer;
