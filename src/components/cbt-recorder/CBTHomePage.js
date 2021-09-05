import React from 'react'
import ThoughtRecordContextProvider from '../../contexts/ThoughtRecordContext'
import Emotions from './recordCreation/Emotions'
import Situation from './recordCreation/Situation'

const CBTHomePage = () => {
  return (
    <ThoughtRecordContextProvider >
      <section >
        <Situation />
        <Emotions />
      </section >
    </ThoughtRecordContextProvider>
    
  )
}

export default CBTHomePage
