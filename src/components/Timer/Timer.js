import React from 'react'

class Timer extends React.Component{  

  render(){
    // let howLong = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
    // 25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,
    // 50,51,52,53,54,55,56,57,58,59,60]
    const { soundPlaying, timer } = this.props
    let minutes, seconds

    seconds = timer % 60
    if(seconds < 10) {
      seconds = `0${seconds}`
    }

    if(timer >= 60){
      minutes = (timer - seconds)/60
    } else {
      minutes = 0
    }
    
    return (
      <>
       {(soundPlaying)
        ?<div className='timer-container'>
          <div>
            {timer && `${minutes}:${seconds}`}
            {!timer && <span>&#8734;</span>}
          </div>
          <img className='button-icon' src={require('../Player/PlayerButtonImages/timer.png')} alt='timer' onClick={() => this.props.handleSetTimer()} />
        </div>
        :<div className='timer-container'>
          <div>
            {timer && `${minutes}:${seconds}`}
            {!timer && <span>&#8734;</span>}
          </div>
          <img className='button-icon' src={require('../Player/PlayerButtonImages/timer.png')} alt='timer' onClick={() => this.props.handleSetTimer()} />
        </div>}
        
        
      </>
    )
  }
}

export default Timer

