import React, { createContext, useState } from 'react'

export const ThoughtRecordContext = createContext()

const testEvidence = [['rest','well'],['djd','dsjhd'],['hdh','hdsj']]

const ThoughtRecordContextProvider = (props) => {
  const [situation, setSituation] = useState('')
  const [emotion, setEmotion] = useState('Feeling Sad')
  const [automaticThoughts, setAutomaticThoughts] = useState('')
  const [evidence, setEvidence] = useState(testEvidence)

  return (
    <ThoughtRecordContext.Provider value={{
                                          situation, setSituation,
                                          emotion,setEmotion,
                                          automaticThoughts,setAutomaticThoughts,
                                          evidence,setEvidence
    }} >
      {props.children}
    </ThoughtRecordContext.Provider >
  )
}

export default ThoughtRecordContextProvider
