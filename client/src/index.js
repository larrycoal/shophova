import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "./Resources/css/styles.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Promise from "redux-promise";
import Thunk from "redux-thunk";
import reducer from "./Store/reducer";
const createStoreMiddleware = applyMiddleware(Promise, Thunk)(createStore);

ReactDOM.render(
  <Provider
    store={createStoreMiddleware(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
