import React, { Component } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import UserContext from "../../contexts/UserContext";
import Header from "../../components/Header/Header";

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = UserContext;

  handleLoginSuccess = () => {
    const { history } = this.props;

    this.context.user.admin === true
      ? history.push("/admin")
      : history.push("/learn");
  };

  render() {
    return (
      <section className="container">
        <Header />
        <p className="tagline">
          Binaural beats use the power of auditory illusion to help you achieve
          altered states of consciousness
        </p>
        <h2>Log In</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </section>
    );
  }
}

export default LoginRoute;
