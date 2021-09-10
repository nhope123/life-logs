import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ThoughtRecordContextProvider from './cbt-recorder/contexts/ThoughtRecordContext'
import ThoughtHome from './cbt-recorder/ThoughtHome'
import Situation from './cbt-recorder/recordCreation/Situation'



const CBTThoughtRecord = ({match}) => {
  return (
    <ThoughtRecordContextProvider >
      <Switch >
        <Route exact path={match.url} component={ThoughtHome} />
        <Route path={match.url + '/create/situation' } component={Situation} />
      </Switch>
    </ThoughtRecordContextProvider>
  )
}

export default CBTThoughtRecord
