import React, { useContext, useState } from 'react'
import Table from '../../Table'
import SingleInputForm from '../SingleInputForm'
import NavigationButton from './NavigationButton'

const AlternateThoughts = () => {
  const {evidence, automaticThoughts} = useContext(contextValue)
  const [thoughtInput, setThoughtInput] = useState('')
  const [thoughtList, setthoughtList] = useState([])

  const 

  return (
    <section >
      <div >
        <p >{evidence}</p>
      </div>
      {/*<Table  /> */}
      <SingleInputForm {...{label:'Alternate Thought',callback:()=>setThoughtInput()}} />
      {/*<NavigationButton  />*/}
      
    </section >
  )
}

export default AlternateThoughts
