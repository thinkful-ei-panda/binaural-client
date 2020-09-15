import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import UserContext from "../../contexts/UserContext";

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = UserContext;

  // handleLoginSuccess = () => {
  //     const { history } = this.props;
  //     {
  //       user.admin ? history.push("/admin") : history.push("/learn");
  //     }
  //   };

  handleAdminLogin = () => {
    const { history } = this.props;
    history.push("/admin");
  };
  handleUserLogin = () => {
    const { history } = this.props;
    history.push("/learn");
  };

  render() {
    const { user } = this.context;

    return (
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={
            user.admin ? this.handleAdminLogin : this.handleUserLogin
          }
        />
        {/* <LoginForm onLoginSuccess={handleLoginSuccess} /> */}
      </section>
    );
  }
}

export default LoginRoute;
