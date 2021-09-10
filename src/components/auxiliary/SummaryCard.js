import React from 'react'

const SummaryCard = (props) => {
  return (
    <div className={'summary-card'}>
      <div >{props.title}</div>
      <div >
        <p >{props.content}</p>
      </div>
      <div >{props.date}</div>
    </div>
  )
}

export default SummaryCard
