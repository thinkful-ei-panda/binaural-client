import React from "react";
import DeltaAV from "./DeltaAV";
import ThetaAV from "./ThetaAV";
import AlphaAV from "./AlphaAV";
import BetaAV from "./BetaAV";
import GammaAV from "./GammaAV";
import DefaultAV from "./DefaultAV";

class AudioVisualizer extends React.Component {
  render() {
    switch (this.props.activeChip) {
      case "Delta":
        return <DeltaAV />;
        break;
      case "Theta":
        return <ThetaAV />;
        break;
      case "Alpha":
        return <AlphaAV />;
        break;
      case "Beta":
        return <BetaAV />;
        break;
      case "Gamma":
        return <GammaAV />;
        break;
      default:
        return <DefaultAV />;
    }
  }
}

export default AudioVisualizer;
