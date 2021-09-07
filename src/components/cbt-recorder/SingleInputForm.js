import React, { useState } from 'react'

/**
 * 
 * @param {object} props - Component properties 
 * @param {string} props.label - Input label
 * @param {Function} props.callback - Function to pass input to parent  component
 */

const SingleInputForm = (props) => {
  const [textInput, setTextInput] = useState('')

  const submitInput = (event) =>{
    event.preventDefault()
    //console.log(textInput);
    props.callback(textInput)
    setTextInput('')    
  }
    
  return (
    <form onSubmit={event=>submitInput(event)} >
      {(props.label) && <label htmlFor={'input'}  >{props.label}</label>}
      <textarea id={'input'}  tabIndex={'0'} name={'input'} value={textInput}
                required placeholder={'Max 100...'} 
                onChange={(event)=>{(event.target.value.length <= 100) && 
                                      setTextInput(event.target.value) 
                                    }}  />
      <input type={'submit'} tabIndex={'0'} value={'Add'}/>
    </form >
  )
}

export default SingleInputForm