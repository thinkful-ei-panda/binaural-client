import React from "react";
import SineWaves from "sine-waves";
import $ from "jquery";

class AlphaAV extends React.Component {
  render() {
    $(function () {
      var waves = new SineWaves({
        el: document.getElementById("waves"),

        speed: 2,

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
            timeModifier: 3, // beat - 2
            lineWidth: 1, // Don't change
            amplitude: 40, // heightL
            wavelength: 60, // lengthL
            segmentLength: 1, // Don't change
            strokeStyle: "#c0cfff", // colorL
          },
          // Middle wave
          {
            timeModifier: 5, // BinauralBeat
            lineWidth: 3, // Don't change
            amplitude: 100, // heightM
            wavelength: 25, // lengthM
            segmentLength: 1, // Don't change
            strokeStyle: "#E0FEFF", // Don't change
          },
          // Right wave
          {
            timeModifier: 7, // BinauralBeat + 2
            lineWidth: 2, // Don't change
            amplitude: 60, // heightR
            wavelength: 25, // lengthR
            segmentLength: 1, // Don't change
            strokeStyle: "#AECBCC", // Don't change
          },
        ],

        initialize: function () {},

        resizeEvent: function () {
          //   var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
          //   var gradient1 = this.ctx.createLinearGradient(0, 0, this.width, 0);
          //   var gradient2 = this.ctx.createLinearGradient(0, 0, this.width, 0);
          // Left wave
          // gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
          // gradient.addColorStop(0.5, "rgb(140, 158, 255)"); // colorL
          // gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
          // Middle wave (Binaural Beat)
          //   gradient1.addColorStop(0, "rgba(0, 0, 0, 0)");
          //   gradient1.addColorStop(0.5, "rgb(234, 128, 252)"); // colorM
          //   gradient1.addColorStop(1, "rgba(0, 0, 0, 0)");
          // Right wave (Binaural Beat)
          //   gradient2.addColorStop(0, "rgba(0, 0, 0, 0)");
          //   gradient2.addColorStop(0.5, "rgb(182, 79, 200)"); // colorR
          //   gradient2.addColorStop(1, "rgba(0, 0, 0, 0)");
          //   var index = -1;
          //   var length = this.waves.length;
          //   while (++index < length) {
          //     this.waves[index].strokeStyle = gradient;
          //   }
          //   // Clean Up
          //   index = void 0;
          //   length = void 0;
          //   gradient = void 0;
        },
      });
    });

    return (
      <div id="container">
        <canvas id="waves" height="700" width="1000">
          {/* {this.handleSineWave} */}
        </canvas>
      </div>
    );
  }
}

export default AlphaAV;
