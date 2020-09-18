import React from 'react'

class WaveSplash extends React.Component{
  render(){
    let wave
    if(this.props.activeChip){
      wave = this.props.activeChip.toLowerCase()
    }
    
    return (
      <>
        {this.props.activeChip && <img src={require(`./WaveSplashImages/${wave}.png`)} alt={this.props.activeChip} />}
      </>
    )
  }
}

export default WaveSplash

