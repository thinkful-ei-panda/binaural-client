 /* eslint-disable */
import React from "react";
import SineWaves from "sine-waves";

class GammaAV extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidMount() {
    this.createSineWaves();
  }

  componentWillUnmount() {
    this.alphaWave = null
  }
  
  createSineWaves(){
    this.alphaWave = new SineWaves({
      el: this.canvasRef.current,
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
            timeModifier: 61,
            lineWidth: 1,
            amplitude: 75,
            wavelength: 15,
            segmentLength: 1,
            strokeStyle: "#ffb2ff",
          },
          // Middle wave
          {
            timeModifier: 63,
            lineWidth: 3,
            amplitude: 150,
            wavelength: 15,
            segmentLength: 1,
            strokeStyle: "#ea80fc",
          },
          // Right wave
          {
            timeModifier: 65,
            lineWidth: 2,
            amplitude: 100,
            wavelength: 15,
            segmentLength: 1,
            strokeStyle: "#b64fc8",
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

export default GammaAV;
