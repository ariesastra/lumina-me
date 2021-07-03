import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {cryptoListReducer} from "./reducer/cryptoReducer"

const reducer = combineReducers({
    cryptoList: cryptoListReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store