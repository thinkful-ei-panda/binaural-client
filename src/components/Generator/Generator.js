import React, { Component } from "react";
import Header from "../../components/Header/Header";
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
