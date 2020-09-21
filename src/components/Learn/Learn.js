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
        <div className="container-2">
          <div className="item">
            <div className="delta">
            <h3>Delta</h3>
            </div>
            <img src="static/img/delta.png" className="Delta" alt="" />
            <p>
            Neural waves in the delta pattern oscillate at a frequency range of 0.1–4 HZ and are most closely associated with deep stage 3 or “slow-wave” sleep.
            </p>
            <p>
            The use of binaural beats at this frequency can help users with detached awareness, sleep and memory formation.
            </p>
          </div>
          <div className="item">
          <div className="theta">
            <h3>Theta</h3>
            </div>
            <img src="static/img/theta.png" className="Theta" alt="" />
            <p>
            Neural waves in the theta pattern oscillate at a frequency range of 4–7 HZ and are most closely associated with REM, or dreaming sleep.
            </p>
            <p>
            The use of binaural beats at this frequency can help users achieve states of meditation, intuition and memory formation.
            </p>
          </div>
          <div className="item">
          <div className="alpha">
            <h3>Alpha</h3>
            </div>
            <img src="static/img/alpha.png" className="Alpha" alt="" />
            <p>
            Neural waves in the alpha pattern oscillate at a frequency range of 8–15 HZ and are most closely associated with the state of wakeful relaxation.
            </p>
            <p>
            The use of binaural beats at this frequency can help users achieve states of better relaxation, meditation and creativity.
            </p>
          </div>
          <div className="item">
          <div className="beta">
            <h3>Beta</h3>
            </div>
            <img src="static/img/beta.png" className="Beta" alt="" />
            <p>
            Neural waves in the beta pattern oscillate at a frequency range of 16–31 HZ and are most closely associated with waking consciousness.
            </p>
            <p>
            The use of binaural beats at this frequency can help users achieve states of heightened alertness, concentration and cognition.
            </p>
          </div>
          <div className="item">
          <div className="gamma">
            <h3>Gamma</h3>
            </div>
            <img src="static/img/gamma.png" className="Gamma" alt="" />
            <p>
            Neural waves in the gamma pattern oscillate at a frequency range of 32–100 HZ and are most closely associated with conscious attention.
            </p>
            <p>
            The use of binaural beats at this frequency can help users achieve states of increased insight, focus and expanded consciousness.
            </p>
          </div>
        </div>
        {TokenService.hasAuthToken() ? (
          <div className="button-container-2">
            <Link to="/player">
              <button type="button">Play</button>
            </Link>
          </div>
        ) : (
          <div className="button-container-2">
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
