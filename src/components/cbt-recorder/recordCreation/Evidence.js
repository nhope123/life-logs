import React, { useContext, useState } from 'react'
import { ThoughtRecordContext } from '../../../contexts/ThoughtRecordContext'
import Table from '../../Table'
import SingleInputForm from '../SingleInputForm'
import {v4 as uuidv4} from 'uuid'

const EVIDENCE_FOR = 'This is true because:'
const EVIDENCE_AGAINST = 'This is untrue because:'

const EvidenceCell = (props) =>{
  return (<span tabIndex={'0'} onClick={()=>props.callback}   >{props.thought}</span>)
}

//removeEvidence('for',forList[i].id)
//{(forList[i])? forList[i].thought: ' '}

const Evidence = () => {
  const {automaticThought} = useContext(ThoughtRecordContext)
  const [evidenceFor, setEvidenceFor] = useState([])
  const [evidenceAgainst, setEvidenceAgainst] = useState([])

  

  const addEvidenceFor = value =>{
    console.log(`for:${value}`);
    setEvidenceFor(state => [...state, {id: uuidv4(), thought: value}])
  }
  const addEvidenceAgainst = value =>{
    console.log(`against:${value}`);
    setEvidenceAgainst(state => [...state, {id: uuidv4(), thought: value}])
  }

  const removeEvidence = (option, id) =>{
    (option === 'for')? setEvidenceFor((state=> state.filter(item=> item.id !== id))):
                        setEvidenceAgainst((state=> state.filter(item=> item.id !== id)))
  }

  const processEvidenceTableRows = (forList, againstList) =>{
    const forLength = forList.length
    const againstLength = againstList.length
    let result = []
    if(forLength === 0 && againstLength === 0) return result
    for(let i = 0; i < Math.max(forLength,againstLength); i++){

      /*{id , Evidence For, }  */
      result.push({
                    id: uuidv4(), 
                    [EVIDENCE_FOR]: (forList[i])? <EvidenceCell {...{
                                                                      thought: forList[i].thought, 
                                                                      callback: removeEvidence('for',forList[i].id)
                                                                    }} /> : ' ',
                    [EVIDENCE_AGAINST]: (againstList[i])? <EvidenceCell {...{
                                                                              thought: againstList[i].thought, 
                                                                              callback: removeEvidence('against',againstList[i].id)
                                                                            }} /> : ' '                    
                  })
    }
    return result
  }

  let tableProps = {columns: [EVIDENCE_FOR, EVIDENCE_AGAINST], rows: processEvidenceTableRows(evidenceFor,evidenceAgainst)}

  return (
    <section >
      <div >
        <p >{automaticThought}</p>
      </div>
      <Table {...tableProps} /> 
      <SingleInputForm {...{label: 'Statement that proves the title',callback: addEvidenceFor }}/>
      <SingleInputForm {...{label: 'Statement that disproves the title',callback: addEvidenceAgainst }} />
    </section >
  )
}

export default Evidence
