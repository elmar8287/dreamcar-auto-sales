import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import carsList from "./redux/reducers/cars";
import './index.css';

const store = legacy_createStore(carsList);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
