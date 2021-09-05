import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

export const DirectionButton = props =>{
  return (
    <div >      
      <button type={'button'} tabIndex={'0'} onClick={(props.callback === null)? ()=>{} : ()=> props.callback} title={props.title} >
        {
          (props.content === 'Back')?<ChevronLeft /> :''
        }
        {props.content}
        {
          (props.content !== 'Back')? <ChevronRight /> :''
        }
      </button>
    </div>
  )
}

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
