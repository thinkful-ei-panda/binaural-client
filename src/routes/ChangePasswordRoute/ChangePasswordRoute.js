import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import ChangePasswordForm from "../../components/ChangePasswordForm/ChangePasswordForm";

class ChangePasswordRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = UserContext;

  //update code block for "change password"
  handlePasswordChangeSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/";
    history.push(destination);
  };

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    // const { user } = this.state;
    return (
      <div>
        {/* database isn't connected to pull user info */}
        <span>`Logged in as {/* ${this.user.name} */}`</span>
        <nav>
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  render() {
    return (
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {this.renderLogoutLink()}
        <h2>Change Password</h2>
        <ChangePasswordForm
          onPasswordChangeSuccess={this.handlePasswordChangeSuccess}
        />
      </section>
    );
  }
}

export default ChangePasswordRoute;
