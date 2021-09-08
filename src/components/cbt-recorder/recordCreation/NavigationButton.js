import React from 'react'
import DirectionButton from './DirectionButton'

const NavigationButton = props => {
  return (
    <div >
      {
        (props.leftButton.title !== null)? <DirectionButton {...props.leftButton} content={'Back'} /> : ''
      }
      {
        (props.rightButton.title !== null)?  <DirectionButton {...props.rightButton} content={'Next'} /> : ''
      }
    </div>
  )
}

export default NavigationButton
