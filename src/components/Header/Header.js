import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import "../App/App.css";

class Header extends Component {
  static contextType = UserContext;

  render() {
    return (
      <header>
        <h1>
          <Link to="/">Binaural</Link>
        </h1>
      </header>
    );
  }
}

export default Header;
