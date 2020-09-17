import React from 'react'

class WaveSplash extends React.Component{
  render(){
    console.log(this.props.activeChip)
    return (
      <>
        {this.props.activeChip && <img src='./WaveSplashImages/alpha.png' alt={this.props.activeChip} />}
      </>
    )
  }
}

export default WaveSplash