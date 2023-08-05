import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./app/store";
import ToggleColorModeProvider from "./utils/ToggleColor";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <Router>
        <App />
      </Router>
    </ToggleColorModeProvider>
  </Provider>,
  document.getElementById("root")
);
