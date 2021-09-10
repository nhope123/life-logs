import React, { useContext, useState } from 'react'
import { ThoughtRecordContext } from '../contexts/ThoughtRecordContext'
import SingleInputForm from '../../auxiliary/SingleInputForm'
import BackForwardNavigation from '../../auxiliary/BackForwardNavigation'

const Situation = () => {
  const [input, setInput] = useState('')
  const {setSituation} = useContext(ThoughtRecordContext)
 
  const submitSituation = () =>{
    if(input.length > 1){
      setSituation(input)
      setInput('')
    }
  }

  const directionProps ={
    leftButton: { callback: null, title: null, content: null },
    rightButton: { 
                  callback: ()=>submitSituation(), 
                  title: 'Go Emotion Page',
                  url: '/thought-record/create/emotion' 
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
        <SingleInputForm {...{label: 'Situation', callback: setInput, count: false}} />
      </div>
      <BackForwardNavigation {...directionProps} />      
    </section >
  )
}

export default Situation
