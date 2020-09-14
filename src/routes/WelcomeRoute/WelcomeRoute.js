import React, { Component } from "react";
import "../../components/App/App.css";
import Welcome from "../../components/Welcome/Welcome";

class WelcomeRoute extends Component {
  render() {
    return (
      <section id="welcomeRoute">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <h2>Welcome</h2>
        <Welcome />
      </section>
    );
  }
}

export default WelcomeRoute;
