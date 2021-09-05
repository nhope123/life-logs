import React, { useContext, useState } from 'react'
import { ThoughtRecordContext } from '../../../contexts/ThoughtRecordContext'
import NavigationButton from './NavigationButton'

const AutomaticThoughts = () => {
  const {emotion, setAutomaticThoughts} = useContext(ThoughtRecordContext)
  const [thoughtInput, setThoughtInput] = useState('')
  const [rate, setRate] = useState('50')
  const [thoughts, setThoughts] = useState([])


  const updatethoughts = event =>{
    event.preventDefault()
    setThoughts([...thoughts,{thought: thoughtInput, rate}])
    setThoughtInput('')
    setRate('50')
  }

  const directionProps ={
    leftButton: {
      callback: null,
      title: 'Go Back to Emotion'
    },
    rightButton: {
      callback: ()=>setAutomaticThoughts(thoughts),
      title: 'Go To Evidence',
    }
  }

  return (
    <section >
      <div >
        <p >{`Enter a short sentence describing the thought you have from feeling ${emotion.split(' ')[1]}.`}</p>
      </div>
      {/*  Require table */}

      <div >
        <form onSubmit={event =>updatethoughts(event)}>
          <textarea tabIndex={'0'} value={thoughtInput} onChange={event => setThoughtInput(event.target.value)}
                    required placeholder={'What are you thinking?'} />
          <input type={'number'} min={'0'} max={'100'} tabIndex={'0'} value={rate} step={'5'}
                 onChange={event => setRate(event.target.value)} />
          <input type={'submit'} tabIndex={'0'} value={'OK'} />
        </form>
      </div>
      <NavigationButton {...directionProps} />
    </section >
  )
}

export default AutomaticThoughts
