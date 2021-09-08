import React, { useContext, useState} from 'react'
import { ThoughtRecordContext } from '../../../contexts/ThoughtRecordContext'
import NavigationButton from './NavigationButton'
import {v4 as uuidv4} from 'uuid'
import Table from '../../Table'
import { XSquare } from 'react-bootstrap-icons'
import SingleInputForm from './SingleInputForm'

const AutomaticThoughts = () => {
  const {emotion, setAutomaticThoughts} = useContext(ThoughtRecordContext)
  const [thoughts, setThoughts] = useState([])

  let tableProps = {columns: ['Thought', 'Intensity', 'action'], rows: [...thoughts]}

 

  const updatethoughts = value =>{    
    setThoughts([...thoughts,{
                              id: uuidv4(), 
                              'Thought': value[0], 
                              'Intensity': value[1], 
                              'action': {callback: removeThought, symbol: <XSquare /> }
                            }])
  }

  const processThoughts = () =>{
    // Filter out the max rate thought
    console.log(thoughts);
    if(thoughts.length === 1){
      setAutomaticThoughts(thoughts[0]['Thought'])
    }
    else if(thoughts.length >= 2){
      setAutomaticThoughts(thoughts.sort((a,b)=>b.Intensity - a.Intensity)[0]['Thought'])
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

  const removeThought = id =>{
   setThoughts(state=> state.filter(item=> item.id !== id))
  }
  
  

  return (
    <section >
      <div >
        <p >{`Enter a short sentence describing the thought you have from feeling ${emotion.split(' ')[1]}.`}</p>
      </div>
      {/*  Require table */}
      <Table {...tableProps} />
      <div >
        <SingleInputForm {...{label: 'Thoughts',callback: updatethoughts, count: true}} />
      </div>
      <NavigationButton {...directionProps} />
    </section >
  )
}

export default AutomaticThoughts
