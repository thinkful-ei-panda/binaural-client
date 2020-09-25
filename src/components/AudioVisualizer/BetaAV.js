 /* eslint-disable */
import React from "react";
import SineWaves from "sine-waves";

class BetaAV extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    this.createSineWaves();
  }

  componentWillUnmount() {
    this.betaWave = null
  }

  createSineWaves () {
    var waves = new SineWaves({
      el: document.getElementById("waves"),
      speed: 1,
      width: function () {
        return window.screen.width;
      },
      height: function () {
        return window.screen.height / 2;
      },
      wavesWidth: "100%",
      ease: "SineInOut",
      waves: [
        // Left wave
        {
          timeModifier: 22,
          lineWidth: 1,
          amplitude: 60,
          wavelength: 20,
          segmentLength: 1,
          strokeStyle: "#e7b9ff",
        },
        // Middle wave
        {
          timeModifier: 24,
          lineWidth: 3,
          amplitude: 125,
          wavelength: 20,
          segmentLength: 1,
          strokeStyle: "#b388ff",
        },
        // Right wave
        {
          timeModifier: 26,
          lineWidth: 2,
          amplitude: 180,
          wavelength: 20,
          segmentLength: 1,
          strokeStyle: "#805acb",
        },
      ],
    });
  };



  render() {

    return (
      <div id="container">
        <canvas  ref={this.canvasRef} id="waves" height="700" width="100%"></canvas>
      </div>
    );
  }
}

export default BetaAV;
