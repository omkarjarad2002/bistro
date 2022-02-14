import {combineReducers} from "redux";
import Amountreducer from "./Amountreducer";


const reducers = combineReducers({
    amount : Amountreducer
})

export default reducers;