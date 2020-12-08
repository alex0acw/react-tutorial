import { connect } from 'react-redux'
import { } from "../redux/actions";
import CounterGroupSum from "../components/CounterGroupSum";

const mapStateToProps = (state) => ({
    sum: state.sum
})

export default connect(mapStateToProps, null)(CounterGroupSum);