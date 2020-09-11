import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Required, Label } from "../Form/Form";
import GeneratorApiService from "../../services/generator-api-service";
import Button from "../Button/Button";
import "../App/App.css";

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, email, password } = ev.target;
    GeneratorApiService.postUser({
      name: name.value,
      email: email.value,
      password: password.value,
    })
      .then((user) => {
        name.value = "";
        email.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
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
        <div role="alert">{error && <p>{error}</p>}</div>
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
        <footer>
          <Button type="submit">Sign up</Button>
          <Link to="/login">
            <Button type="button">Login</Button>
          </Link>
        </footer>
      </form>
    );
  }
}

export default RegistrationForm;
