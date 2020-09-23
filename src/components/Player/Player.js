import React, { Component } from "react";
import Timer from "../Timer/Timer";
import AudioVisualizer from "../AudioVisualizer/AudioVisualizer";
import DefaultAV from "../AudioVisualizer/DefaultAV";
import WaveChips from "../WaveChips/WaveChips";
import UserContext from "../../contexts/UserContext";
import "./Player.css";
import UserApiService from "../../services/user-api-service";
import TokenService from "../../services/token-service";

class Player extends Component {
  static contextType = UserContext;
  static defaultProps = {};

  state = {
    error: null,
    beat: 2,
    fundamental: 100,
    soundPlaying: false,

    activeChip: null,
    oscillators: [],
    timer: null,
    timerInterval: null,

    user: null,
  };


  async componentDidMount(){    
    const {id} = await TokenService.parseAuthToken()
    const user = await UserApiService.getUser(id)
    if(user.user_prefs.length > 0) {
      this.setState({activeChip:user.user_prefs,user:user})
    } else {
      this.setState({user:user})
    }
  }

  componentWillUnmount(){
    if(this.soundTimerInterval)    
      clearInterval(this.soundTimerInterval);
    if(this.timerTimeout)
      clearTimeout(this.timerTimeout);
  }

  handleChipChange = async (chip) => {
    switch (chip) {
      case "Delta":
        await this.setState({ beat: 2, activeChip: "Delta" });
        break;
      case "Theta":
        await this.setState({ beat: 5, activeChip: "Theta" });
        break;
      case "Alpha":
        await this.setState({ beat: 10, activeChip: "Alpha" });
        break;
      case "Beta":
        await this.setState({ beat: 24, activeChip: "Beta" });
        break;
      case "Gamma":
        await this.setState({ beat: 63, activeChip: "Gamma" });
        break;
      default:
        console.log(chip);
    }
  };

  handlePlayTone = async (e) => {
    e.preventDefault();

     await UserApiService.updateUserPassword(this.state.user.id, {
      user_prefs: this.state.activeChip,
    });

    let ctx = new (window.AudioContext || window.webkitAudioContext)();

    let b = this.state.beat;
    let f = this.state.fundamental;

    // Pan
    let panNodes

    if(ctx.createStereoPanner){
      panNodes = [ctx.createStereoPanner(), ctx.createStereoPanner()];
      panNodes[0].pan.value = -1;
      panNodes[1].pan.value = 1;
    } else {
      console.log('HERE')
      panNodes = [ctx.createPanner(), ctx.createPanner()];
      panNodes[0].panningModel = 'equalpower';
      panNodes[0].setPosition(-1, 0, 1 - Math.abs(-1));
      panNodes[1].panningModel = 'equalpower';
      panNodes[1].setPosition(1, 0, 1 - Math.abs(1));
    }

    console.log(panNodes)
    
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
 
      o.connect(panNodes[pan]);
      oscillators.push(o);
    }

    this.setState({ oscillators: oscillators, soundPlaying: true }, () => {
      this.state.oscillators[0].start();
      this.state.oscillators[1].start();
    });

    if (this.state.timer) {
      this.soundTimerInterval = setInterval(
        () => this.handleUpdateTimer(),
        1000
      );
      this.timerTimeout = setTimeout(() => this.handleStopTone(), this.state.timer * 1000);
    }
  };

  //decrements timer on interval tick (helper function)
  handleUpdateTimer = () => {
    this.setState({ timer: this.state.timer - 1 });
  };

  //stops tone when stop is clicked or when timer runs out
  handleStopTone = () => {
    this.state.oscillators[0].stop(2);
    this.state.oscillators[1].stop(2);
    clearInterval(this.soundTimerInterval);
    clearTimeout(this.timerTimeout);
    if (this.state.timer === 0) {
      this.setState({ soundPlaying: false, timer: null });
    } else {
      this.setState({ soundPlaying: false });
    }
  };

  //increments and sets timer state when user clicks timer
  handleSetTimer = () => {
    let timerSettings = [1, 5, 10, 15, 20, 30, 45, 60];
    if (this.state.timer === 60 * 60) {
      this.setState({ timer: null });
    } else {
      for (let i = 0; i < timerSettings.length; i++) {
        if (this.state.timer < timerSettings[i] * 60) {
          this.setState({ timer: timerSettings[i] * 60 });
          break;
        }
      }
    }
  };

  render() {
    const { error } = this.state;
    const chips = ["Delta", "Theta", "Alpha", "Beta", "Gamma"];
    return (
      <>
        {this.state.soundPlaying ? (
          <AudioVisualizer activeChip={this.state.activeChip} />
        ) : (
          <DefaultAV />
        )}
        <footer className="player">
          <div role="alert">{error && <p>{error}</p>}</div>
          <WaveChips
            chips={chips}
            soundPlaying={this.state.soundPlaying}
            activeChip={this.state.activeChip}
            handleChipChange={this.handleChipChange}
          />
          <div>
            {this.state.soundPlaying ? (
              <img
                className="button-icon"
                src="static/img/pause.png"
                alt="pause"
                onClick={this.handleStopTone}
              />
            ) : (
              <img
                className="button-icon"
                src="static/img/play.png"
                alt="play"
                disabled={this.state.loading}
                onClick={this.handlePlayTone}
              />
            )}
          </div>
          <Timer
            handleSetTimer={this.handleSetTimer}
            timer={this.state.timer}
            soundPlaying={this.state.soundPlaying}
          />
        </footer>
      </>
    );
  }
}

export default Player;
