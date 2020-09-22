import React, { Component } from "react";

const WaveContext = React.createContext({
  binaural: [
    {
      wave: "Default", // 2Hz
      beat: 1, // when doubled equals the binaural beat
      widthL: 1,
      widthM: 3,
      widthR: 2,
      heightL: 5,
      heightM: 15,
      heightR: 10,
      lengthL: 40,
      lengthM: 80,
      lengthR: 50,
      colorL: "#FFFFFF",
      colorM: "#E0FEFF",
      colorR: "#AECBCC",
    },
    {
      wave: "Delta", // 2Hz
      beat: 2, // when doubled equals the binaural beat
      heightL: 30,
      heightM: 100,
      heightR: 60,
      lengthL: 40,
      lengthM: 80,
      lengthR: 50,
      colorL: "#b5ffff",
      colorM: "#80d8ff",
      colorR: "#49a7cc",
    },
    {
      wave: "Theta", // 5Hz
      beat: 3, // when doubled equals the binaural beat
      heightL: 30,
      heightM: 100,
      heightR: 60,
      lengthL: 40,
      lengthM: 40,
      lengthR: 40,
      colorL: "#b6e3ff",
      colorM: "#82b1ff",
      colorR: "#4d82cb",
    },
    {
      wave: "Alpha", // 10Hz
      beat: 5, // when doubled equals the binaural beat
      heightL: 40,
      heightM: 100,
      heightR: 60,
      lengthL: 25,
      lengthM: 25,
      lengthR: 25,
      colorL: "#c0cfff",
      colorM: "#8c9eff",
      colorR: "#5870cb",
    },
    {
      wave: "Beta", // 24Hz
      beat: 12, // when doubled equals the binaural beat
      heightL: 60,
      heightM: 125,
      heightR: 180,
      lengthL: 20,
      lengthM: 20,
      lengthR: 20,
      colorL: "#e7b9ff",
      colorM: "#b388ff",
      colorR: "#805acb",
    },
    {
      wave: "Gamma", // 63Hz
      beat: 31, // when doubled equals the binaural beat
      heightL: 75,
      heightM: 150,
      heightR: 100,
      lengthL: 15,
      lengthM: 15,
      lengthR: 15,
      colorL: "#ffb2ff",
      colorM: "#ea80fc",
      colorR: "#b64fc8",
    },
  ],
});

export default WaveContext;

export class WaveProvider extends Component {
  constructor(props) {
    super(props);
    const state = { binaural: [] };
  }

  render() {
    const value = {
      // wave: this.binaural[].wave,
      // beat: this.binaural[].beat,
      // lengthL: this.binaural[].lengthL,
      // lengthM: this.binaural[].lengthL,
      // lengthR: this.binaural[].lengthL,
      // colorL: this.binaural[].colorL,
      // colorM: this.binaural[].colorL,
      // colorR: this.binaural[].colorL,
    };
    return (
      <WaveContext.Provider value={value}>
        {this.props.children}
      </WaveContext.Provider>
    );
  }
}
