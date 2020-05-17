import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";

const reducers = combineReducers({
    reducer
});

export const store = createStore(reducers, applyMiddleware(thunk));