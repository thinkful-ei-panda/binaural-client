import React, { Component } from "react";
import "../../components/App/App.css";
import Welcome from "../../components/Welcome/Welcome";
import Header from "../../components/Header/Header";
import UserContext from "../../contexts/UserContext";

class WelcomeRoute extends Component {
  render() {
    return (
      <section className="container">
        <Header />
        <p className="tagline">
        Binaural beats use the power of auditory illusion to help you achieve altered states of consciousness
        </p>
        <UserContext.Consumer>
          {userContext => 
            userContext.user.id
            ?<h2>Welcome {userContext.user.name}</h2>
            :<h2>Welcome</h2>
          }          
          </UserContext.Consumer>
        <Welcome />
      </section>
    );
  }
}

export default WelcomeRoute;
