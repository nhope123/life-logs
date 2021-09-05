import React, { createContext, useState } from 'react'

export const ThoughtRecordContext = createContext()

const ThoughtRecordContextProvider = (props) => {
  const [situation, setSituation] = useState('')
  const [emotion, setEmotion] = useState('Feeling Sad')
  const [automaticThoughts, setAutomaticThoughts] = useState([])

  return (
    <ThoughtRecordContext.Provider value={{
                                          situation, setSituation,
                                          emotion,setEmotion,
                                          automaticThoughts,setAutomaticThoughts
    }} >
      {props.children}
    </ThoughtRecordContext.Provider >
  )
}

export default ThoughtRecordContextProvider
