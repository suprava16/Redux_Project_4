import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import CombinedReducers from "./Reducers/CombinedReducers"

let store=createStore(CombinedReducers,applyMiddleware(thunk))
export default store;