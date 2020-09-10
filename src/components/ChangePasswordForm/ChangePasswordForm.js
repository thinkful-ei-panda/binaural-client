import React, { Component } from "react";
import { Input, Label } from "../Form/Form";
import GenerateApiService from "../../services/generator-api-service";
import UserContext from "../../contexts/UserContext";
import Button from "../Button/Button";
import "../App/App.css";

class ChangePasswordForm extends Component {
  static defaultProps = {
    onPasswordChangeSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { password } = ev.target;

    this.setState({ error: null });

    GenerateApiService.updateUser({
      password: password.value,
    })
      .then((res) => {
        password.value = "";
        this.context.processLogin(res.authToken); //change processLogin
        this.props.onLoginSuccess(); //change onLoginSuccess
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
      <form className="ChangePasswordForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p>{error}</p>}</div>
        <div>
          <Label htmlFor="change-password-input" hidden>
            New Password
          </Label>
          <Input
            id="change-password-input"
            name="password"
            type="password"
            placeholder="new password*"
            required
          />
        </div>
        <Button type="submit">Save Password</Button>
      </form>
    );
  }
}

export default ChangePasswordForm;
