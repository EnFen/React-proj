import 'semantic-ui-css/semantic.min.css';
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'semantic-ui-css/semantic.min.css'

import { Provider } from "react-redux";

import store from "./redux/stores/store";
import Nav from "./components/nav/Nav";
import App from "./app/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


