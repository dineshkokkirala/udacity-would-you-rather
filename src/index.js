import React from "react";

import "./index.css";

import rootReducer from "./reducers/index";
import middleware from "./middleware";

import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
