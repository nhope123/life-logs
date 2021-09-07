import React, { useState } from 'react'

const SingleInputForm = (props) => {
  const [textInput, setTextInput] = useState('')
  return (
    <form onSubmit={()=>{}} >
      {(props.label) && <label for={'input'}  >{props.label}</label>}
      <textarea id={'input'}  tabIndex={'0'} name={'input'} value={textInput} onChange={(event)=>{
                                                                                console.log(event.target);
                                                                                setTextInput()
                                                                                }}  />
      <input type={'submit'} tabIndex={'0'} />
    </form >
  )
}

export default SingleInputForm
