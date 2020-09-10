import React, { Component } from 'react'
// import * as THREE from 'three';
// import SimplexNoise from 'simplex-noise'
import {Tone} from 'tone'

const handleButtonClick = () => {
  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n");

}
class ThingyRoute extends Component {
    
  
  render() {    

    return (
      <section>     
        <button onClick = {handleButtonClick}>Play</button>   

      </section>
    );
  }
}

export default ThingyRoute
