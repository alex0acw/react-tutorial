import { CHANGE_COUNT } from "./actionTypes";

export const setCount = (index, newCount) => ({
    type: CHANGE_COUNT,
    payload: {
        index: index,
        newCount: newCount
    }
}) 