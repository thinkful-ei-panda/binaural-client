import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicOnlyRoute from "../PublicOnlyRoute/PublicOnlyRoute";
import RegistrationRoute from "../../routes/RegistrationRoute/RegistrationRoute";
import LoginRoute from "../../routes/LoginRoute/LoginRoute";
import DashboardRoute from "../../routes/DashboardRoute/DashboardRoute";
import GeneratorRoute from "../../routes/GeneratorRoute/GeneratorRoute";
import ChangePasswordRoute from "../../routes/ChangePasswordRoute/ChangePasswordRoute";
import NotFoundRoute from "../../routes/NotFoundRoute/NotFoundRoute";
import "./App.css";

export default class App extends Component {
  state = {
    hasError: false,
    user: {},
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError, user } = this.state;
    return (
      <div className="App">
        <Header />
        <main>
          {hasError && <p>There was an error! Oh no!</p>}
          <Switch>
            <PrivateRoute
              exact
              path={"/"}
              component={user.admin === true ? DashboardRoute : GeneratorRoute}
            />
            <PublicOnlyRoute path={"/change"} component={ChangePasswordRoute} />
            <PublicOnlyRoute path={"/register"} component={RegistrationRoute} />
            <PublicOnlyRoute path={"/login"} component={LoginRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}
