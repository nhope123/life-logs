import React, { useContext, useState } from 'react'
import { ThoughtRecordContext } from '../../../contexts/ThoughtRecordContext'
import Table from '../../Table'
import SingleInputForm from '../SingleInputForm'

const Evidence = () => {
  const {automaticThought} = useContext(ThoughtRecordContext)
  const [evidenceFor, setEvidenceFor] = useState([])
  const [evidenceAgainst, setEvidenceAgainst] = useState([])

  return (
    <section >
      <div >
        <p >{automaticThought}</p>
      </div>
      <Table />
      <SingleInputForm />
    </section >
  )
}

export default Evidence
