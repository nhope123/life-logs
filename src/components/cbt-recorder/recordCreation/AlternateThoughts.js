import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ThoughtRecordContext } from '../contexts/ThoughtRecordContext'
import Table from '../../auxiliary/Table'
import SingleInputForm from '../../auxiliary/SingleInputForm'
import ActiveTableCell from '../../auxiliary/ActiveTableCell'
import ThoughtSubmission from '../RecordPreview'
import BackForwardNavigation from '../../auxiliary/BackForwardNavigation'

const COLUMNS =['Evidence For','Evidence Against','Alternate Thought']

// devops
const testAlt = [{id: 1, thought: 'I am happy now'},{id:2,thought: 'Love is in the air'}]

const AlternateThoughts = () => {
  const {evidence, automaticThoughts, setAlternateThought} = useContext(ThoughtRecordContext)
  const [thoughtList, setThoughtList] = useState(testAlt)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const updateThoughtList = value => {
    setThoughtList(state => [...state,{id: uuidv4(), thought: value }])
  }

  const removeAlternate = id =>{
    setThoughtList(state=> state.filter(item => item.id !== id))
  }
  
  const openModal = () =>{
    setAlternateThought(thoughtList)
    setIsModalOpen(state =>!state)
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
    rightButton: { callback: ()=> (thoughtList.length >= 1)? openModal(): {}, title: 'Preview Record', }
  }

  return (
    <section style={{zIndex:2}} >
      <div >
        <p >{automaticThoughts}</p>
      </div>
      <Table {...tableProps} /> 
      <SingleInputForm {...{label:'Alternate Thought',callback: updateThoughtList, count: false}} />
      <BackForwardNavigation {...directionProps} />
      <ThoughtSubmission {...{isOpen: isModalOpen, callback: ()=>setIsModalOpen(!isModalOpen)}} />
    </section >
  )
}

export default AlternateThoughts
