import React from "react";
import SineWaves from "sine-waves";
import $ from "jquery";

class GammaAV extends React.Component {
  render() {
    $(function () {
      var waves = new SineWaves({
        el: document.getElementById("waves"),
        speed: 1,
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

export default GammaAV;
