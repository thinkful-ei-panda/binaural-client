import React from 'react'
import WaveChip from './WaveChip'

class WaveChips extends React.Component{
  render() {
    const { chips, handleChipChange, activeChip, soundPlaying } = this.props    

    const waveChips = chips.map((chip,i) => <WaveChip key={i} chip={chip} handleChipChange={handleChipChange} activeChip={activeChip} soundPlaying={soundPlaying}/>)

    return (
      <div className='chip-container'>
        {waveChips}
      </div>
    )
  }
}

export default WaveChips