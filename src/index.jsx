import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import UnsplashApp from "./containers/App";
import store from "./store/store.js";

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <UnsplashApp history={history} />
    </Provider>,
    document.getElementById("root")
);
