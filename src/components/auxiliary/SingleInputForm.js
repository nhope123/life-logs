import React, { useState } from 'react'

/**
 * 
 * @param {object} props - Component properties 
 * @param {string} props.label - Input label
 * @param {boolean} props.count - If true rate is required 
 * @param {Function} props.callback - Function to pass input to parent  component
 */
const SingleInputForm = (props) => {
  const [textInput, setTextInput] = useState('')
  const [rate, setRate] = useState('50')

  /**
   * 
   * @param {object} event - Form event property
   */
  const submitInput = (event) =>{
    event.preventDefault()
    props.count ? props.callback([textInput,rate]) :  props.callback(textInput)
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
      {
        props.count && (<input type={'number'} min={'0'} max={'100'} tabIndex={'0'} value={rate} step={'5'}
                             onChange={event => setRate(event.target.value)} />) 
      }                              
      <input type={'submit'} tabIndex={'0'} value={'Add'}/>
    </form >
  )
}

export default SingleInputForm