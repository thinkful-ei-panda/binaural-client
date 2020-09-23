import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
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
        <Header />
        <p>
          Binaural beats use the power of auditory illusion to help you achieve
          altered states of consciousness
        </p>
        <div>
          <Link to="/change">
            <p>Change Password</p>
          </Link>
          {this.renderLogoutLink()}
        </div>
        <Player />
      </section>
    );
  }
}

export default PlayerRoute;
