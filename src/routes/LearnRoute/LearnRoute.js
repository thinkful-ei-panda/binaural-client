import React, { Component } from "react";
// import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import Learn from "../../components/Learn/Learn";

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
      <section>
        <h2>Learn</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Learn />
      </section>
    );
  }
}

export default LearnRoute;
