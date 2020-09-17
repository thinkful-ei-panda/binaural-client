import React, { Component } from "react";
import "../../components/App/App.css";
import Welcome from "../../components/Welcome/Welcome";
import Header from "../../components/Header/Header";

class WelcomeRoute extends Component {
  render() {
    return (
      <section className="container">
        <Header />
        <p className="tagline">
        Binaural beats use the power of auditory illusion to help you achieve altered states of consciousness
        </p>
        <h2>Welcome</h2>
        <Welcome />
      </section>
    );
  }
}

export default WelcomeRoute;
