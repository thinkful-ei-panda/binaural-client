 /* eslint-disable */
import React from "react";
import SineWaves from "sine-waves";

class DeltaAV extends React.Component {
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
        // Left wave (Don't change settings pls)
        {
          timeModifier: 1.75,
          lineWidth: 2,
          amplitude: 30,
          wavelength: 40,
          segmentLength: 1,
          strokeStyle: "#b5ffff",
        },
        // Middle wave (Don't change settings pls)
        {
          timeModifier: 2,
          lineWidth: 2,
          amplitude: 100,
          wavelength: 80,
          segmentLength: 1,
          strokeStyle: "#80d8ff",
        },
        // Right wave (Don't change settings pls)
        {
          timeModifier: 2.25,
          lineWidth: 1,
          amplitude: 60,
          wavelength: 50,
          segmentLength: 1,
          strokeStyle: "#49a7cc",
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

export default DeltaAV;
