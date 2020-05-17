import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {reducer} from "./reducer";
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    data: reducer,
    form: formReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;