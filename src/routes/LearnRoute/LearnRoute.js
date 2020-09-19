import React, { Component } from "react";
// import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Learn from "../../components/Learn/Learn";
import Header from "../../components/Header/Header";

class LearnRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  static contextType = UserContext;

  render() {
    return (
      <section className="container">
        <Header />
        <h2>Turn On, Tune In, Drop Out</h2>
        <p className="tagline">
        Binaural beats use the power of auditory illusion to help you achieve altered states of consciousness
        </p>
        <Learn />
      </section>
    );
  }
}

export default LearnRoute;
