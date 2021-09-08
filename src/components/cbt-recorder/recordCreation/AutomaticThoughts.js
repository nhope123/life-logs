import React, { useContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { XSquare } from 'react-bootstrap-icons'

import SingleInputForm from './SingleInputForm'
import { ThoughtRecordContext } from '../../../contexts/ThoughtRecordContext'
import Table from '../../Table'
import NavigationButton from './NavigationButton'

const AutomaticThoughts = () => {
  const {emotion, setAutomaticThoughts} = useContext(ThoughtRecordContext)
  const [thoughts, setThoughts] = useState([])

  let tableProps = {columns: ['Thought', 'Intensity', 'action'], rows: [...thoughts]}

  /**
   * 
   * @param {array} value - Value return from SingleInputForm
   * @param {string} value[0] - A thought
   * @param {number} value[1] - Intensity of the thought 
   */
  const updatethoughts = value =>{    
    setThoughts([...thoughts,{
                              id: uuidv4(), 
                              'Thought': value[0], 
                              'Intensity': value[1], 
                              'action': {callback: removeThought, symbol: <XSquare /> }
                            }])
  }

  const processThoughts = () =>{
    if(thoughts.length === 1){
      setAutomaticThoughts(thoughts[0]['Thought'])
    }
    else if(thoughts.length >= 2){
      setAutomaticThoughts(thoughts.sort((a,b)=>b.Intensity - a.Intensity)[0]['Thought'])
    }    
  }

  const directionProps = {
    leftButton: { callback: null, title: 'Go Back to Emotion' },
    rightButton: { callback: ()=>processThoughts(), title: 'Go To Evidence', }
  }

  /**
   * 
   * @param {number} id - Id of thought to be remove
   */
  const removeThought = id =>{
   setThoughts(state=> state.filter(item=> item.id !== id))
  }  

  return (
    <section >
      <div >
        <p >{`Enter a short sentence describing the thought you have from feeling ${emotion.split(' ')[1]}.`}</p>
      </div>
      <div >
        <Table {...tableProps} />
      </div >
      <div >
        <SingleInputForm {...{label: 'Thoughts',callback: updatethoughts, count: true}} />
      </div>
      <NavigationButton {...directionProps} />
    </section >
  )
}

export default AutomaticThoughts
