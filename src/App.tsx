import React from "react";
import styled from "styled-components";

import { Router, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBrowserHistory } from "history";
import { getCookie } from "./helpers";
import ShowFullscreen from "./pages/fullscreen/ShowFullscreen";
import ShowFeed from "./pages/home/ShowFeed";
import Header from "./commonModules/header/Header"
import SettingsPage from "./pages/settings";
import { login } from "./store/actions/actions";

function UnsplashApp() {
  const dispatch = useDispatch();
  if (getCookie("login_status") === "logged_in") dispatch(login());
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Header />
      <AppContainer>
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
          <Route exact path="/settings">
            <SettingsPage />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

const AppContainer = styled.div`
  padding-top: 84px;
`;

export default UnsplashApp;
