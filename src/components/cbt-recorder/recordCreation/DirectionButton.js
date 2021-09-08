import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'

const DirectionButton = (props) => {
  return (
    <div >      
      <button type={'button'} tabIndex={'0'} title={props.title}
              onClick={(props.callback === null)? ()=>{} : props.callback}  >
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

export default DirectionButton
