import React from 'react'
import { FileEarmarkPlusFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import SummaryCard from '../auxiliary/SummaryCard'

const data = [
  {
    id: 236,
    situation: 'wgwduidwiy',
    emotion: 'feeling Sad',
    automaticThought: 'hyiw7823h  ciue iiiubiw we',
    alternateThought: [
      'hjsdjhdsh','hjdsjhdshj duui  idu', 'hvdsvbds dsids di udsi ','hdsj ds  dsuu'
    ],
    date: 'Aug 4, 2021'
  },
  {
    id: 223,
    situation: 'wgwduidwiy',
    emotion: 'feeling Sad',
    automaticThought: 'hyiw7823h  ciue iiiubiw we',
    alternateThought: [
      'hjsdjhdsh','hjdsjhdshj duui  idu', 'hvdsvbds dsids di udsi ','hdsj ds  dsuu'
    ],
    date: 'Aug 23, 2021'
  },
  {
    id: 283,
    situation: 'wgwduidwiy',
    emotion: 'feeling Sad',
    automaticThought: 'hyiw7823h  ciue iiiubiw we',
    alternateThought: [
      'hjsdjhdsh',
      'hjdsjhdshj duui  idu', 
      'hvdsvbds dsids di udsi ',
      'hdsj ds  dsuu'
    ],
    date: 'Aug 13, 2021'
  }
]



const ThoughtHome = () => {
  return (
    <section  id={'thought-home'}>
      <div className={'title'}>
        <h1 >{'CBT Thought Record'}</h1>
        <div id={'create-thought'}>
          <Link to={'/thought-record/create/situation'} >
            <FileEarmarkPlusFill className={'create-icon'}/>
          </Link>
        </div>
      </div>
      <div className={'thought-list'}>
        {
          data.map(record =>{
            return(
              <SummaryCard key={record.id} {...{
                                                title: record.emotion,
                                                content: record.situation,
                                                date: record.date
                                               }} />
            )
          })
        }        
      </div>      
    </section >
  )
}

export default ThoughtHome
