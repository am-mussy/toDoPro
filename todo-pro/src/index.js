import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import THEAM from "./theam";
import { Provider } from "react-redux";
import { store } from "./store/index";

document.body.style = `
background: ${THEAM.COLOR.GLOBAL.backGroundColor};
color: ${THEAM.COLOR.GLOBAL.fontColor};`;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
