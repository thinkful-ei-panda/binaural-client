import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

class HeaderPlayer extends Component {
  static contextType = UserContext;

  render() {
    return (
      <header>
        <h1>
          <Link to="/learn">Binaural</Link>
        </h1>
      </header>
    );
  }
}

export default HeaderPlayer;
