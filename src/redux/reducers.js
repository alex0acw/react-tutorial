
import { DECREASE, INCREASE, RESET, UPDATE_COUNT_SIZE } from "./actionTypes";

import { combineReducers } from 'redux'

const sum = (state = 0, action) => {
    switch (action.type) {
        case INCREASE: {
            return state + 1
        }
        case DECREASE: {
            return state - 1
        }
        case RESET: {
            return 0
        }
        default:
            return state;
    }
}

const size = (state = 0, action) => {
    if (action.type === UPDATE_COUNT_SIZE)
        return action.payload;
    return state;
}


export const reducers = combineReducers({ sum, size })
