import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Generator from "../../components/Generator/Generator";

class GeneratorRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    // const { user } = this.state;
    return (
      <div>
        <span>"Logged in as" {/* {this.user.name} */}</span>
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
        <p>Best Experienced Through Headphones</p>
        {this.renderLogoutLink()}
        <h2>Change Password</h2>
        {/* <Generator /> */}
      </section>
    );
  }
}

export default GeneratorRoute;
