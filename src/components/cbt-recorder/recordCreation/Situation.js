import React, { useContext, useState } from 'react'
import { ThoughtRecordContext } from '../../../contexts/ThoughtRecordContext'
import NavigationButton from './NavigationButton'

const Situation = () => {
  const [input, setInput] = useState('')
  const {setSituation} = useContext(ThoughtRecordContext)
 
  const submitSituation = () =>{
    console.log('submit');
    if(input.length > 1){
      setSituation(input)
      setInput('')
    }
  }

  const directionProps ={
    leftButton: {
      callback: null,
      title: null,
      content: null
    },
    rightButton: {
      callback: ()=>submitSituation(),
      title: 'Go Emotion Page',
    }
  }

  return (
    <section >
      <div >
        <p >{'Enter a short sentence describing and actual event or thought that is causing\
               you emotional distress'}
        </p>
      </div>
      <div >
        <input type={'text'} tabIndex={'0'} value={input} placeholder={'Situation'} 
               onChange={event => setInput(event.target.value)}  required />
      </div>
      {/* Bug: situation context value not updating */}
      <NavigationButton {...directionProps} />      
    </section >
  )
}

export default Situation
