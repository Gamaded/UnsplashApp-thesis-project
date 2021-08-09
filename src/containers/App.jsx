import React from "react";

import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import ShowFullscreen from "../components/fullscreen-viewing/ShowFullscreen.jsx";
import ShowFeed from "./ShowFeed.jsx";
import Header from "../components/header/Header.jsx";
// import Popup from "../components/Popup/Popup.jsx";

function UnsplashApp () {

    return (
        <Router>
            <Header exact path="/auth" />
            <Switch>
                <Route exact path="/auth" >
                    <Redirect to="/home" />
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <ShowFeed />
                </Route>
                <Route exact path="/fullscreen">
                    <ShowFullscreen />
                </Route>
            </Switch>
        </Router>
    );
}

export default UnsplashApp;
