 /* eslint-disable */
import React from "react";
import SineWaves from "sine-waves";

class AlphaAV extends React.Component {
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
      speed: 2,
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
          timeModifier: 8,
          lineWidth: 2,
          amplitude: 40,
          wavelength: 25,
          segmentLength: 1,
          strokeStyle: "#c0cfff",
        },
        // Middle wave
        {
          timeModifier: 10,
          lineWidth: 3,
          amplitude: 100,
          wavelength: 25,
          segmentLength: 1,
          strokeStyle: "#8c9eff",
        },
        // Right wave
        {
          timeModifier: 12,
          amplitude: 60,
          wavelength: 25,
          segmentLength: 1,
          strokeStyle: "#5870cb",
        },
      ],
    });
  };

  render() {
    
    return (
      <div id="container">
        <canvas ref={this.canvasRef} id="waves" height="700" width="100%"></canvas>
      </div>
    );
  }
}

export default AlphaAV;
