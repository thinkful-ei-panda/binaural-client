import React from "react";
import { Link } from "react-router-dom";
import { Input, Label } from "../Form/Form";
import UserApiService from "../../services/user-api-service";
import UserContext from "../../contexts/UserContext";
import TokenService from "../../services/token-service";
import Button from "../Button/Button";
import "../App/App.css";

export default class ChangePasswordForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      password: '',
      error: null,
      user_id: '',//TODO how to get the user id?
    }
    this.handlePassUpdate = this.handlePassUpdate.bind(this);
  }

  static defaultProps = {
    onPasswordChangeSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };

  firstInput = React.createRef();

  async handlePassUpdate(event) {
    event.preventDefault();

    const { password } = event.target;
    const user_id = //TODO how to get the user id?

    this.setState({ error: null });

   await UserApiService
   .updateUserPassword(user_id, {
      password: password.value,
    })
      .then((res) => {
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        //this.context.onPasswordChangeSuccess(res.authToken)
        this.props.onPasswordChangeSuccess();
        this.props.history.push('/change');
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  // componentDidMount() {
  //   this.firstInput.current.focus();
  // }

  render() {
    const { error } = this.state;
    return (
      <form className="ChangePasswordForm" onSubmit={this.handlePassUpdate}>
        {/* DISPLAY OF THE FORM WITH THE PASSWORD FIELD TO BE UPDATED */}
        <div role="alert">{error && <p>{error}</p>}</div>
        <div>
          <Label htmlFor="change-password-input" hidden>
            Change Password
          </Label>
          <Input
            id="change-password-input"
            name="password"
            type="password"
            placeholder="New Password"
            onChange={this.handlePassUpdate}
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
