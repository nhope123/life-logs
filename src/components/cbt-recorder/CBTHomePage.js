import React from 'react'

import ThoughtRecordContextProvider from './contexts/ThoughtRecordContext'
import AlternateThoughts from './recordCreation/AlternateThoughts'
import AutomaticThoughts from './recordCreation/AutomaticThoughts'
import Emotions from './recordCreation/Emotions'
import Evidence from './recordCreation/Evidence'
import Situation from './recordCreation/Situation'
import ThoughtHome from './ThoughtHome'

const CBTHomePage = () => {
  return (
    <ThoughtRecordContextProvider >
      <section title={'cbt home page'} >
        <ThoughtHome />
       {/* <Situation />
        {/*<Emotions />
        <AutomaticThoughts /> 
        <Evidence />
        <AlternateThoughts />*/}
      </section >
    </ThoughtRecordContextProvider>
    
  )
}

export default CBTHomePage
