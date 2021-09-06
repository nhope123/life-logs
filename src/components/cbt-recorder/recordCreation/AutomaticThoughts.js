import React, { useContext, useState } from 'react'
import { ThoughtRecordContext } from '../../../contexts/ThoughtRecordContext'
import NavigationButton from './NavigationButton'
import {v4 as uuidv4} from 'uuid'
import Table from '../../Table'

const AutomaticThoughts = () => {
  const {emotion, setAutomaticThoughts} = useContext(ThoughtRecordContext)
  const [thoughtInput, setThoughtInput] = useState('')
  const [rate, setRate] = useState('50')
  const [thoughts, setThoughts] = useState([])
  let tableProps = {columns: ['Automatic Thought', 'Intensity', ' '], rows: [...thoughts]}

  const updatethoughts = event =>{
    event.preventDefault()
    setThoughts([...thoughts,{id: uuidv4() ,thought: thoughtInput, rate}])
    setThoughtInput('')
    setRate('50')
  }

  const processThoughts = () =>{
    // Filter out the max rate thought
    if(thoughts.length === 1){
      setAutomaticThoughts(thoughts[0])
    }
    else if(thoughts.length >= 2){
      setAutomaticThoughts(thoughts.sort((a,b)=>b.rate - a.rate)[0].thought)
    }    
  }

  const directionProps ={
    leftButton: {
      callback: null,
      title: 'Go Back to Emotion'
    },
    rightButton: {
      callback: ()=>processThoughts(),
      title: 'Go To Evidence',
    }
  }
  
  return (
    <section >
      <div >
        <p >{`Enter a short sentence describing the thought you have from feeling ${emotion.split(' ')[1]}.`}</p>
      </div>
      {/*  Require table */}
      <Table {...tableProps} />
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
