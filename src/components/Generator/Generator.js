import React, { Component } from "react";
import UserContext from "../../contexts/UserContext";
import "../App/App.css";

class Generator extends Component {
  static contextType = UserContext;

  render() {
    return (
      <>
        <Header />
        <section></section>
      </>
    );
  }
}

export default Generator;
