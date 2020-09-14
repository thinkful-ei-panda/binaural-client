import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Label } from "../Form/Form";
import AuthApiService from "../../services/auth-api-service";
import UserContext from "../../contexts/UserContext";
import Button from "../Button/Button";
import "../App/App.css";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { email, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      email: email.value,
      password: password.value,
    })
      .then((res) => {
        email.value = "";
        password.value = "";
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form className="LoginForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p>{error}</p>}</div>
        <div>
          <Label htmlFor="login-email-input" hidden>
            Email
          </Label>
          <Input
            ref={this.firstInput}
            id="login-email-input"
            name="email"
            placeholder="email*"
            required
          />
        </div>
        <div>
          <Label htmlFor="login-password-input" hidden>
            Password
          </Label>
          <Input
            id="login-password-input"
            name="password"
            type="password"
            placeholder="password*"
            required
          />
        </div>
        <Link to="/player">
          <Button type="submit">Log In</Button>
        </Link>
        <Link to="/register">
          <Button type="button">Sign Up</Button>
        </Link>
      </form>
    );
  }
}

export default LoginForm;
