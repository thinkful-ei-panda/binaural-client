import React from "react";
import SineWaves from "sine-waves";
import $ from "jquery";

class ThetaAV extends React.Component {
  render() {
    $(function () {
      var waves = new SineWaves({
        el: document.getElementById("waves"),
        speed: 2.5,
        width: function () {
          return $(window).width();
        },
        height: function () {
          return $(window).height() / 2;
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
    });

    return (
      <div id="container">
        <canvas id="waves" height="700" width="100%"></canvas>
      </div>
    );
  }
}

export default ThetaAV;
