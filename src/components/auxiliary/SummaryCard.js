import React from 'react'

const SummaryCard = (props) => {
  const capitalize = aString => aString[0].toUpperCase().concat(aString.slice(1))
  return (
    <div className={'summary-card'}>
      <h3 className={'title'} >{capitalize(props.title)}</h3>
      <div >
        <p >{capitalize(props.content)}</p>
      </div>
      <div className={'date'} >{props.date}</div>
    </div>
  )
}

export default SummaryCard
