import {createStore} from "redux"

import CombinedReducers from "./Reducers/CombinedReducers"

let store=createStore(CombinedReducers)
export default store;