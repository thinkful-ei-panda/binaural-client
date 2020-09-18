import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Label } from "../Form/Form";
import UserApiService from "../../services/user-api-service";
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

    UserApiService.updateUser({
      password: password.value,
    })
      .then((res) => {
        password.value = "";
        //TODO change processLogin to processChange function
        this.context.processLogin(res.authToken);
        //TODO change onLoginSuccess to an onChangeSuccess function
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  //TODO the .focus is breaking the page
  componentDidMount() {
    // this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form className="ChangePasswordForm" onSubmit={this.handleSubmit}>
        <div className="alert" role="alert">{error && <p>{error}</p>}</div>
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
        <Link onClick={this.context.handleLogoutClick} to="/login">
          <Button type="submit">Save Password</Button>
        </Link>
      </form>
    );
  }
}

export default ChangePasswordForm;
