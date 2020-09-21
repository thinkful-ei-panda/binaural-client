import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Required, Label } from "../Form/Form";
import UserApiService from "../../services/user-api-service";
import TokenService from "../../services/token-service";
import Button from "../Button/Button";
import UserContext from "../../contexts/UserContext";
import "../App/App.css";

class RegistrationForm extends Component {
  static contextType = UserContext;
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, email, password } = ev.target;
    UserApiService.postUser({
      name: name.value,
      email: email.value,
      password: password.value,
    })
      .then((res) => {
        name.value = "";
        email.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
        TokenService.saveAuthToken(res.authToken);
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
      <form onSubmit={this.handleSubmit}>
        <div className="alert" role="alert">{error && <p>{error}</p>}</div>
        <div>
          <Label
            htmlFor="registration-name-input"
            value="Enter your name"
            hidden
          ></Label>
          <Input
            ref={this.firstInput}
            id="registration-name-input"
            name="name"
            placeholder="name*"
            required
          />
        </div>
        <div>
          <Label htmlFor="registration-email-input" hidden>
            Enter your email
            <Required />
          </Label>
          <Input
            id="registration-email-input"
            name="email"
            placeholder="email*"
            required
          />
        </div>
        <div>
          <Label htmlFor="registration-password-input" hidden>
            Enter your Password
            <Required />
          </Label>
          <Input
            id="registration-password-input"
            type="password"
            name="password"
            placeholder="password*"
            required
          />
        </div>
        <footer className="button-container">
          <Button type="submit">Sign Up</Button>
          <Link to="/login">
            <Button type="button">Log In</Button>
          </Link>
        </footer>
      </form>
    );
  }
}

export default RegistrationForm;
