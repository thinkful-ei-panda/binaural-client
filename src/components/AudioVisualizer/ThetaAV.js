 /* eslint-disable */
import React from "react";
import SineWaves from "sine-waves";

class ThetaAV extends React.Component {
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
          speed: 2.5,
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
              timeModifier: 3,
              lineWidth: 2,
              amplitude: 30,
              wavelength: 40,
              segmentLength: 1,
              strokeStyle: "#b6e3ff",
            },
            // Middle wave
            {
              timeModifier: 5,
              lineWidth: 3,
              amplitude: 100,
              wavelength: 40,
              segmentLength: 1,
              strokeStyle: "#82b1ff",
            },
            // Right wave
            {
              timeModifier: 7,
              lineWidth: 1,
              amplitude: 60,
              wavelength: 40,
              segmentLength: 1,
              strokeStyle: "#4d82cb",
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
      
      export default ThetaAV;
      