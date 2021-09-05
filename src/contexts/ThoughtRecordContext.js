import React, { createContext, useState } from 'react'

export const ThoughtRecordContext = createContext()

const ThoughtRecordContextProvider = (props) => {
  const [situation, setSituation] = useState('')

  return (
    <ThoughtRecordContext.Provider value={} >
      {props.children}
    </ThoughtRecordContext.Provider >
  )
}

export default ThoughtRecordContextProvider
