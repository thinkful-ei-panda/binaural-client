import React, { Component } from "react";
// import { Input, Required, Label } from "../Form/Form";
// import UserApiService from "../../services/user-api-service";
// import Button from "../Button/Button";
import "../App/App.css";
import Timer from "../Timer/Timer";
import Visualizer from "../Visualizer/Visualizer";
import WaveChips from "../WaveChips/WaveChips";
import WaveSplash from "../WaveSplash/WaveSplash";
import './Player.css'


class Player extends Component {
  static defaultProps = {};

  state = {
    error: null,
    beat: 4,
    fundamental: 100,
    soundPlaying: false,

    activeChip:null,
    oscillators:[],
    timer:null,
    timerInterval:null,
  };

  handleChipChange = async (chip) => {
    
    switch(chip){
      case 'Delta':
        await this.setState({beat: 2,activeChip:'Delta'})
        break;
      case 'Theta':
        await this.setState({beat: 4,activeChip:'Theta'})
        break;
      case 'Alpha':
        await this.setState({beat: 8,activeChip:'Alpha'})
        break;
      case 'Beta':
        await this.setState({beat: 12,activeChip:'Beta'})
        break;
      case 'Gamma':
        await this.setState({beat: 30,activeChip:'Gamma'})
        break;
      default:
        console.log(chip)        
    }      
  }


  handlePlayTone = (e) => {
    e.preventDefault();

    let ctx = new (window.AudioContext || window.webkitAudioContext)();

    // let b = parseInt(e.target.Beat.value); // beat in Hz
    // let f = parseInt(e.target.Fundamentals.value); // fundamental frequency

    let b = this.state.beat;
    let f = this.state.fundamental;

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
      console.log(o);
      o.type = "sine";
      if (pan !== 0) {
        o.frequency.value = f + b;
      } else {
        o.frequency.value = f + 0;
      }
      // o.start();
      o.connect(panNodes[pan]);
      oscillators.push(o);
    }

    this.setState({oscillators:oscillators, soundPlaying:true},() => {

      this.state.oscillators[0].start();
      this.state.oscillators[1].start();      
    })

    
    if(this.state.timer){
      this.soundTimerInterval = setInterval(()=>this.handleUpdateTimer(),1000)
      setTimeout(() => this.handleStopTone(),this.state.timer*1000)
    }
  };

  //decrements timer on interval tick (helper function)
  handleUpdateTimer = () => {
    this.setState({timer:this.state.timer-1})
  }

  //stops tone when stop is clicked or when timer runs out
  handleStopTone = () => {    
    this.state.oscillators[0].stop()
    this.state.oscillators[1].stop()
    clearInterval(this.soundTimerInterval)    
    if(this.state.timer === 0){
      this.setState({soundPlaying:false,timer:null})
    }else{
      this.setState({soundPlaying:false})
    }
  }

  //increments and sets timer state when user clicks timer
  handleSetTimer = () => {
    let timerSettings = [1,5,10,15,20,30,45,60]
    if(this.state.timer === 60*60){
      this.setState({timer:null})
    }
    else {
      for(let i=0; i < timerSettings.length; i++){
        if (this.state.timer < timerSettings[i]*60){
          this.setState({timer:timerSettings[i]*60})
          break;
        }
      }
    }    
  }

  render() {
    const { error } = this.state;
    const chips = ['Delta','Theta','Alpha','Beta','Gamma']
    return (
      <>
        {this.state.soundPlaying ? (
          <Visualizer beat={this.state.beat} />
        ) : (
          <WaveSplash activeChip={this.state.activeChip}/>
        )}

        <footer className='player'>
          <div role="alert">{error && <p>{error}</p>}</div>
          <WaveChips chips={chips} soundPlaying={this.state.soundPlaying} activeChip={this.state.activeChip} handleChipChange={this.handleChipChange}/>
          <div>
            {this.state.soundPlaying
            ?<img className='button-icon' src={require('./PlayerButtonImages/pause.png')} alt='pause' onClick = {this.handleStopTone} />
            :<img className='button-icon' src={require('./PlayerButtonImages/play.png')} alt='play' disabled={this.state.loading} onClick={this.handlePlayTone} />}
          </div>
          <Timer handleSetTimer = {this.handleSetTimer} timer={this.state.timer} soundPlaying={this.state.soundPlaying}/>
        </footer>
      </>
    );
  }
}

export default Player;
