import React, { useContext, useState } from 'react'
import { ThoughtRecordContext } from '../../../contexts/ThoughtRecordContext'
import Table from '../../Table'
import SingleInputForm from './SingleInputForm'
import {v4 as uuidv4} from 'uuid'
import NavigationButton from './NavigationButton'

const EVIDENCE_FOR = 'This is true because:'
const EVIDENCE_AGAINST = 'This is untrue because:'

const ActiveTableCell = (props) =>{
  return (<span tabIndex={'0'} onClick={props.callback}   >{props.thought}</span>)
}

const Evidence = () => {
  const {automaticThought, setEvidence} = useContext(ThoughtRecordContext)
  const [evidenceFor, setEvidenceFor] = useState([])
  const [evidenceAgainst, setEvidenceAgainst] = useState([])  

  const addEvidenceFor = value =>{
    setEvidenceFor(state => [...state, {id: uuidv4(), thought: value}])
  }

  const addEvidenceAgainst = value =>{
    setEvidenceAgainst(state => [...state, {id: uuidv4(), thought: value}])
  }

  const removeEvidence = (option, id) =>{
    console.log('remove me');
    (option === 'for')? setEvidenceFor((state=> state.filter(item=> item.id !== id))):
                        setEvidenceAgainst((state=> state.filter(item=> item.id !== id)))
  }

  const processEvidence = (option) =>{
    const forLength = evidenceFor.length
    const againstLength = evidenceAgainst.length
    let result = []

    if(forLength === 0 && againstLength === 0 && option === 'table'){ return [{id: 1,[EVIDENCE_FOR]:' ',[EVIDENCE_AGAINST]:' ' }]}
    else if(forLength === 0 && againstLength === 0 && option === 'context'){ return result }
    else {
      for(let i = 0; i < Math.max(forLength,againstLength); i++){
        result.push((option === 'table')? {
                      id: uuidv4(),
                      [EVIDENCE_FOR]: (evidenceFor[i])? (<ActiveTableCell {...{
                                                                            thought: evidenceFor[i].thought, 
                                                                            callback: ()=>removeEvidence('for',evidenceFor[i].id)
                                                                          }}  /> ) : ' ',
                      [EVIDENCE_AGAINST]: (evidenceAgainst[i])? (<ActiveTableCell {...{
                                                                                thought: evidenceAgainst[i].thought, 
                                                                                callback: ()=>removeEvidence('against',evidenceAgainst[i].id)
                                                                              }}  /> ) : ' '
        } : [
              (evidenceFor[i])? evidenceFor[i].thought : ' ',
              (evidenceAgainst[i])? evidenceAgainst[i].thought: ' '
        ])
      }
    }
    return result
  }

  const updateEvidence = () =>{
    const result = processEvidence('context')
    result && setEvidence(result)
  }
  

  let tableProps = {columns: [EVIDENCE_FOR, EVIDENCE_AGAINST], rows: processEvidence('table')}
  
  const directionProps ={
    leftButton: {
      callback: null,
      title: 'Go Back to Automatic Thought'
    },
    rightButton: {
      callback: ()=>updateEvidence(),
      title: 'Go To Alternate Thought',
    }
  }

  return (
    <section >
      <div >
        <p >{automaticThought}</p>
      </div>
      <Table {...tableProps} /> 
      <SingleInputForm {...{label: 'Statement that proves the title',callback: addEvidenceFor,count: false }}/>
      <SingleInputForm {...{label: 'Statement that disproves the title',callback: addEvidenceAgainst,count:false }} />
      <NavigationButton {...directionProps} />
    </section >
  )
}

export default Evidence
