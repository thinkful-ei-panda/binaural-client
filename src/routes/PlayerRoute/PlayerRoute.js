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
        <p>
          Binaural beats use the power of auditory illusion to help you achieve
          altered states of consciousness
        </p>
        {this.renderLogoutLink()}
        <Link to="/change">
          <h2>Change Password</h2>
        </Link>
        <Player />
      </section>
    );
  }
}

export default PlayerRoute;
