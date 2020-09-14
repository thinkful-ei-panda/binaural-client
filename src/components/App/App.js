import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicOnlyRoute from "../PublicOnlyRoute/PublicOnlyRoute";
import RegistrationRoute from "../../routes/RegistrationRoute/RegistrationRoute";
import LoginRoute from "../../routes/LoginRoute/LoginRoute";
import DashboardRoute from "../../routes/DashboardRoute/DashboardRoute";
import PlayerRoute from "../../routes/PlayerRoute/PlayerRoute";
import LearnRoute from "../../routes/LearnRoute/LearnRoute";
import ChangePasswordRoute from "../../routes/ChangePasswordRoute/ChangePasswordRoute";
import WelcomeRoute from "../../routes/WelcomeRoute/WelcomeRoute";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";
import UserContext from "../../contexts/UserContext";
import "../../index.css";
import "./App.css";

export default class App extends Component {
  state = {
    hasError: false,
  };

  static contextType = UserContext;

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <div className="App">
        <Header />
        <main>
          {hasError && <p>There was an error! Oh no!</p>}

          <Switch>
            <PublicOnlyRoute exact path={"/"} component={WelcomeRoute} />
            <PublicOnlyRoute path={"/register"} component={RegistrationRoute} />
            <PublicOnlyRoute path={"/login"} component={LoginRoute} />
            {/* //TODO pull user.admin
            {!user.admin ? ( */}
            <Route path={"/learn"} component={LearnRoute} />
            {/* ) : (  */}
            <PrivateRoute path={"/dashboard"} component={DashboardRoute} />
            {/* )}  */}
            <PublicOnlyRoute path={"/player"} component={PlayerRoute} />
            <PrivateRoute path={"/change"} component={ChangePasswordRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}
