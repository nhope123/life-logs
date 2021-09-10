import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

/**
 * 
 * @param {object} props
 * @param {string} props.title - Accessible name 
 * @param {string} props.content - Button label 
 * @callback props.callback - Button onClick callback
 * @returns 
 */
const DirectionButton = (props) => {

  const child = (
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
  )

  return (
    <div > 
      {(props.url)? <Link to={props.url} >{child}</Link>: child }
    </div>
  )
}

export default DirectionButton
