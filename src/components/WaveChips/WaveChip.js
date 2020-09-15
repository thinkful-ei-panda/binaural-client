import React from 'react'

class WaveChip extends React.Component{
  render() {
    const { chip, handleChipChange, activeChip } = this.props
    return (
      <div>
        <button className={activeChip===chip ? "activeChip" : "chip"} onClick={() => handleChipChange(chip)}>{chip}</button>
      </div>
    )
  }
}

export default WaveChip