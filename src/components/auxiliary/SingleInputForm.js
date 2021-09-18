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
    <div className={'single-input'} >
      <form onSubmit={event=>submitInput(event)} >
        <div >
          {(props.label) && <label htmlFor={'input'}  >{props.label}</label>}
        </div >
        <div className={'form-inputs'}> 
          <textarea id={'input'}  tabIndex={'0'} name={'input'} value={textInput}
                    required placeholder={'Max 100...'} 
                    onChange={(event)=>{(event.target.value.length <= 100) && 
                                          setTextInput(event.target.value) 
                                        }}  />
          <div className={'rate-submit'} >
            {
              props.count && (<input type={'number'} min={'0'} max={'100'} tabIndex={'0'} value={rate} step={'5'}
                                  onChange={event => setRate(event.target.value)} />) 
            }                              
            <input type={'submit'} tabIndex={'0'} value={'Add'} disabled={`${!(textInput.length >1)}`}/>
          </div>
        </div >
      </form >
    </div>
  )
}

export default SingleInputForm