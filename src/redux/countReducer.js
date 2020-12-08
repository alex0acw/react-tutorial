import { CHANGE_COUNT } from "./actionTypes";

const initialState = {
    counts: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_COUNT: {
            const { index, newCount } = action.payload;
            let newCounts = state.counts;
            newCounts[index] += newCount
            return {
                ...state,
                counts: newCounts
            };
        }
        default:
            return state;
    }
}
