import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import UnsplashApp from "./App";
import store from "./store/store";

ReactDOM.render(
    <Provider store={store}>
        <UnsplashApp />
    </Provider>,
    document.getElementById("root")
);
