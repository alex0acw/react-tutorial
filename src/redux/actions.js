
import { DECREASE, INCREASE, RESET, UPDATE_COUNT_SIZE, } from "./actionTypes";

export const increaseSum = () => ({ type: INCREASE })
export const decreaseSum = () => ({ type: DECREASE })
export const updateCountSize = (size) => ({ type: UPDATE_COUNT_SIZE, payload: size })
export const reset = () => ({ type: RESET })