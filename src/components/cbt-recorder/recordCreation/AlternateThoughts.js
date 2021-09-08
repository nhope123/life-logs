import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ThoughtRecordContext } from '../../../contexts/ThoughtRecordContext'
import Table from '../../Table'
import SingleInputForm from './SingleInputForm'
import NavigationButton from './NavigationButton'
import ActiveTableCell from '../../ActiveTableCell'

const COLUMNS =['Evidence For','Evidence Against','Alternate Thought']

const AlternateThoughts = () => {
  const {evidence, automaticThoughts, setAlternateThought} = useContext(ThoughtRecordContext)
  const [thoughtList, setThoughtList] = useState([])

  const updateThoughtList = value => {
    setThoughtList(state => [...state,{id: uuidv4(), thought: value }])
  }

  const removeAlternate = id =>{
    setThoughtList(state=> state.filter(item => item.id !== id))
  }
  
  const processAlternatives = () =>{
    let evidenceLength = evidence.length
    let alternateLength = thoughtList.length
    let result = []
    for (let i = 0; i < Math.max(evidenceLength,alternateLength); i++) {
      let index0 = evidence[i]? evidence[i] : [' ',' ']
      result.push({
                    id: uuidv4(),
                    [COLUMNS[0]]: index0[0],
                    [COLUMNS[1]]: index0[1],
                    [COLUMNS[2]]: thoughtList[i]? <ActiveTableCell {...{
                                                                        callback: ()=>removeAlternate(thoughtList[i].id), 
                                                                        thought: thoughtList[i].thought
                                                                      }} /> : ' '
      })      
    }
    return result
  }

  const tableProps = {
                      columns: COLUMNS,
                      rows: processAlternatives()                   
                    } 

  const directionProps = {
    leftButton: { callback: null, title: 'Go Back to Evidence' },
    rightButton: { callback: ()=> (thoughtList.length >= 1)? setAlternateThought(thoughtList): {}, title: 'Preview Record', }
  }

  return (
    <section >
      <div >
        <p >{automaticThoughts}</p>
      </div>
      <Table {...tableProps} /> 
      <SingleInputForm {...{label:'Alternate Thought',callback: updateThoughtList, count: false}} />
      <NavigationButton {...directionProps} />
      
    </section >
  )
}

export default AlternateThoughts
