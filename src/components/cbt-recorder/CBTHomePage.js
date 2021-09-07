import React from 'react'
import ThoughtRecordContextProvider from '../../contexts/ThoughtRecordContext'
import AutomaticThoughts from './recordCreation/AutomaticThoughts'
import Emotions from './recordCreation/Emotions'
import Evidence from './recordCreation/Evidence'
import Situation from './recordCreation/Situation'

const CBTHomePage = () => {
  return (
    <ThoughtRecordContextProvider >
      <section >
        {/*<Situation />
        <Emotions />
        <AutomaticThoughts /> */}
        <Evidence />
      </section >
    </ThoughtRecordContextProvider>
    
  )
}

export default CBTHomePage
