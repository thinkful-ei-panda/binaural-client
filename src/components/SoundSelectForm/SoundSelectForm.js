import React, { Component } from "react";
import { Input, Required, Label } from "../Form/Form";
import GeneratorApiService from "../../services/generator-api-service";
import Button from "../Button/Button";
import "../App/App.css";
import Visualiser from "./Visualiser";

class SoundSelectForm extends Component {
  static defaultProps = {    
  };

  state = 
  { 
    error: null,
    beat: 4,
    fundamental: 80,
    soundPlaying:false,
  };
  

  handlePlayTone = (e) => {
  
    e.preventDefault();

    let ctx = new (window.AudioContext || window.webkitAudioContext)();
  
    // let b = parseInt(e.target.Beat.value); // beat in Hz
    // let f = parseInt(e.target.Fundamentals.value); // fundamental frequency

    let b = this.state.beat
    let f = this.state.fundamental
  
    // Pan
    let panNodes = [ctx.createStereoPanner(), ctx.createStereoPanner()];
    panNodes[0].pan.value = -1;
    panNodes[1].pan.value = 1;
    panNodes[0].connect(ctx.destination);
    panNodes[1].connect(ctx.destination);
  
    // Oscillators
    let oscillators = [];
    let o;
    for (let i = 0; i < 2; i++) {
      let pan = i % 2;
      o = ctx.createOscillator();
      console.log(o)
      o.type = "sine";
      if (pan !== 0) {
        o.frequency.value = (f + b);
      } else {
        o.frequency.value = (f + 0);
      }
      // o.start();
      o.connect(panNodes[pan]);
      oscillators.push(o);
    }

    oscillators[0].start()
    oscillators[1].start()

    this.setState({soundPlaying:true})
  };

  render() {
    const { error } = this.state;
    return (
      <>
        {this.state.soundPlaying 
          ? <Visualiser beat = {this.state.beat}/> 
          :<form onSubmit={(e) => this.handlePlayTone(e)}>
            <div role="alert">{error && <p>{error}</p>}</div>
            <select>
              <option value = 'Delta'>Delta</option>
              <option value = 'Theta'>Theta</option>
              <option value = 'Alpha'>Alpha</option>
            </select>
            <select>
              <option value = 'Cube'>Cube</option>
              <option value = 'Sphere'>Sphere</option>
              <option value = 'Polehedral'>Polehedral</option>
            </select>
            <button>Play</button>
          </form>
        }
      </>
    );
  }
}

export default SoundSelectForm;
