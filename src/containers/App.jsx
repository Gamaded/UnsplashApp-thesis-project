import React from "react";

import { Router, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBrowserHistory } from "history";
import { getCookie } from "../helpers";
import ShowFullscreen from "../components/fullscreen-viewing/ShowFullscreen.jsx";
import ShowFeed from "./ShowFeed.jsx";
import Header from "../components/header/Header.jsx";
import { setAuth } from "../store/actions/actions";

function UnsplashApp() {
  const dispatch = useDispatch();
  if (getCookie("login_status") === "logged_in") dispatch(setAuth());
  const history = createBrowserHistory();

  return (
    <Router history={history}>
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
