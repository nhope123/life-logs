import React from 'react'
import ThoughtRecordContextProvider from './cbt-recorder/contexts/ThoughtRecordContext'
import ThoughtHome from './cbt-recorder/ThoughtHome'


const CBTThoughtRecord = () => {
  return (
    <ThoughtRecordContextProvider >
      <ThoughtHome />
    </ThoughtRecordContextProvider>
  )
}

export default CBTThoughtRecord
