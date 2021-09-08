import React from 'react'

/**
 * An interactive table cell 
 * @param {object} props 
 * @param {function} callback - To be executed with the onclick event
 * @param {string} thought - Element display content 
 * @returns A span element
 */
const ActiveTableCell = (props) => {
  return (
    <span tabIndex={'0'} onClick={props.callback} >
      {props.thought}
    </span>)
}

export default ActiveTableCell
