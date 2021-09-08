import React, { useContext, useState } from 'react'
import { ThoughtRecordContext } from '../../../contexts/ThoughtRecordContext'
import Table from '../../Table'
import SingleInputForm from './SingleInputForm'
import NavigationButton from './NavigationButton'

const AlternateThoughts = () => {
  const {evidence, automaticThoughts} = useContext(ThoughtRecordContext)
  const [thoughtInput, setThoughtInput] = useState('')
  const [thoughtList, setthoughtList] = useState([])

  const tableProps = {
                      columns: ['Evidence For','Evidence Against','Alternate Thought'],
                      rows: []
                    
                    } 

  return (
    <section >
      <div >
        <p >{automaticThoughts}</p>
      </div>
      {/*<Table  /> */}
      <SingleInputForm {...{label:'Alternate Thought',callback: setThoughtInput, count: false}} />
      {/*<NavigationButton  />*/}
      
    </section >
  )
}

export default AlternateThoughts
