import React from 'react'
import { FileEarmarkPlusFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import SummaryCard from '../auxiliary/SummaryCard'

const data = '.'
const ThoughtHome = () => {
  return (
    <section  id={'thought-home'}>
      <div className={'title'}>
        <h1 >{'CBT Thought Record'}</h1>
        <div id={'create-thought'}>
          <Link to={'/thought-record/create/situation/'} >
            <FileEarmarkPlusFill className={'create-icon'}/>
          </Link>
        </div>
      </div>
      <div className={'thought-list'}>
        <SummaryCard />
      </div>
      
    </section >
  )
}

export default ThoughtHome
