import React, { createContext, useState } from 'react'

export const ThoughtRecordContext = createContext()

const testEvidence = [['rest','well'],['djd','dsjhd'],['hdh','hdsj']]
const testAuto = 'feeling sad'
const testAlt = [{id: 1, thought: 'I am happy now'},{id:2,thought: 'Love is in the air'}]

const ThoughtRecordContextProvider = (props) => {
  const [situation, setSituation] = useState('')
  const [emotion, setEmotion] = useState('Feeling Sad')
  const [automaticThoughts, setAutomaticThoughts] = useState(testAuto)
  const [evidence, setEvidence] = useState(testEvidence)
  const [alternateThought, setAlternateThought] = useState(testAlt)


  return (
    <ThoughtRecordContext.Provider value={{
                                          situation, setSituation,
                                          emotion,setEmotion,
                                          automaticThoughts,setAutomaticThoughts,
                                          evidence,setEvidence,
                                          alternateThought,setAlternateThought
    }} >
      {props.children}
    </ThoughtRecordContext.Provider >
  )
}

export default ThoughtRecordContextProvider
