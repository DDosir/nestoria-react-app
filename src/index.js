import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import state from "./store/state";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={state}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

