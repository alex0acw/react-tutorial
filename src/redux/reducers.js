import { use } from "react-redux"
import { combineReducers } from "redux"
import countReducer from "./countReducer";
export const rootReducer = combineReducers({countReducer});
