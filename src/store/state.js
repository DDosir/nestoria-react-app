import {createStore, applyMiddleware} from "redux";
import {reducer} from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const state = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default state;
