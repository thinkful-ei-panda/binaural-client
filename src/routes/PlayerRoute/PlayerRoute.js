import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Player from "../../components/Player/Player";

class PlayerRoute extends Component {
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
    const { user } = this.context;
    return (
      <div>
        <span>Logged in as {user.name}</span>
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
        <Player />
      </section>
    );
  }
}

export default PlayerRoute;
