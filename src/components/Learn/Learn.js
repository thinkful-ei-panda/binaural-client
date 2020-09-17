import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "../App/App.css";

class Learn extends Component {
  static contextType = UserContext;

  render() {
    return (
      <>
        <div className="item">
          <h3>Delta</h3>
          <img src="static/img/delta.png" className="Delta" alt="" />
          <p className="deltaInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="item">
          <h3>Theta</h3>
          <img src="static/img/theta.png" className="Theta" alt="" />
          <p className="thetaInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="item">
          <h3>Alpha</h3>
          <img src="static/img/alpha.png" className="Alpha" alt="" />
          <p className="alphaInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="item">
          <h3>Beta</h3>
          <img src="static/img/beta.png" className="Beta" alt="" />
          <p className="deltaInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="item">
          <h3>Gamma</h3>
          <img src="static/img/gamma.png" className="Gamma" alt="" />
          <p className="gammaInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {TokenService.hasAuthToken() ? (
          <div>
            <Link to="/player">
              <button type="button">Binaural Player</button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/register">
              <button type="button">Sign Up</button>
            </Link>
            <Link to="/login">
              <button type="button">Log In</button>
            </Link>
          </div>
        )}
      </>
    );
  }
}

export default Learn;
