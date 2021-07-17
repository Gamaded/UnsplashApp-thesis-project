import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {createBrowserHistory} from "history";
import {BrowserRouter as Router} from "react-router-dom";
import getPhotosFromUnsplash from "./store/reducers/getPhotosFromUnsplash";
import UnsplashApp from "./containers/App";
import store from "./store/store.js";

const history = createBrowserHistory();
store.dispatch(getPhotosFromUnsplash);

ReactDOM.render(
    <Router>
        <UnsplashApp history={history} store={store} />
    </Router>,
    document.getElementById("root")
);
