import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "../App/App.css";

class Learn extends Component {
  static contextType = UserContext;

  render() {
    return (
      <section>
        <img className="Delta" alt="" />
        <p className="deltaInfo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img className="Theta" alt="" />
        <p className="thetaInfo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img className="Alpha" alt="" />
        <p className="alphaInfo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img className="Beta" alt="" />
        <p className="deltaInfo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img className="Gamma" alt="" />
        <p className="gammaInfo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {TokenService.hasAuthToken() ? (
          <div>
            <Link to="player">
              <button type="button">Binaural Player</button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="register">
              <button type="button">Sign Up</button>
            </Link>
            <Link to="login">
              <button type="button">Log In</button>
            </Link>
          </div>
        )}
      </section>
    );
  }
}

export default Learn;
