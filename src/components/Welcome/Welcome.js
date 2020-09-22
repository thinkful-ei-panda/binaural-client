import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "../App/App.css";
import UserContext from '../../contexts/UserContext'

class Welcome extends Component {

  render() {
    return (
      <section className="button-container">
        <Link to="/learn">
          <Button type="button">Learn More</Button>
        </Link>
        <UserContext.Consumer>
          {userContext =>
            !userContext.user.id 
            ?<>
              <Link to="/register">
                <Button type="button">Sign Up</Button>
              </Link>
              <Link to="/login">
                <Button type="button">Log In</Button>
              </Link>
            </>
            :<Button onClick= {() => userContext.processLogout()} type="button">Log Out</Button>
          
          }          
        </UserContext.Consumer>
        
      </section>
    );
  }
}

export default Welcome;
