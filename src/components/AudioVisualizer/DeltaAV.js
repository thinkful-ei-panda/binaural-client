 /* eslint-disable */
import React from "react";
import SineWaves from "sine-waves";
import $ from "jquery";

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

      initialize: function () {},

      resizeEvent: function () {
        // var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
        // gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
        // gradient.addColorStop(0.5, "rgb(140, 158, 255)");
        // gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        // var index = -1;
        // var length = this.waves.length;
        // while (++index < length) {
        //   this.waves[index].strokeStyle = gradient;
        // }
        // Clean Up
        // index = void 0;
        // length = void 0;
        // gradient = void 0;
      },
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
