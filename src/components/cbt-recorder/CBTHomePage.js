import React from 'react'
import ThoughtRecordContextProvider from '../../contexts/ThoughtRecordContext'
import AutomaticThoughts from './recordCreation/AutomaticThoughts'
import Emotions from './recordCreation/Emotions'
import Situation from './recordCreation/Situation'

const CBTHomePage = () => {
  return (
    <ThoughtRecordContextProvider >
      <section >
        <Situation />
        <Emotions />
        <AutomaticThoughts />
      </section >
    </ThoughtRecordContextProvider>
    
  )
}

export default CBTHomePage
