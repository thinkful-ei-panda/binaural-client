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
        <nav className="nav">
          <Link to="/change">
            <p>Change Password</p>
          </Link>
          <p>&nbsp;|&nbsp;</p>
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
        <p className="tagline">
          Please use headphones and Google Chrome for the optimal experience
        </p>
        <div>
          {this.renderLogoutLink()}
        </div>
        <Player />
      </section>
    );
  }
}

export default PlayerRoute;
