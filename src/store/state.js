import {createStore, applyMiddleware, combineReducers} from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer as formReducer} from 'redux-form'

const reducers = {
	reducer: reducer,
	form: formReducer,
}

const combinedReducer = combineReducers(reducers);

const state = createStore(combinedReducer, composeWithDevTools(applyMiddleware(thunk)));

export default state;
