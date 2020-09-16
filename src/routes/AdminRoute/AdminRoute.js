import React, { Component } from "react";
// import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Admin from "../../components/Admin/Admin";

class ChangePasswordRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = UserContext;

  render() {
    return (
      <section>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <h2>Admin</h2>
          {this.renderLogoutLink()}
        </div>
        <Admin />
      </section>
    );
  }
}

export default ChangePasswordRoute;
