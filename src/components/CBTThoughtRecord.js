import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ThoughtRecordContextProvider from './cbt-recorder/contexts/ThoughtRecordContext'
import ThoughtHome from './cbt-recorder/ThoughtHome'
import Situation from './cbt-recorder/recordCreation/Situation'
import Emotions from './cbt-recorder/recordCreation/Emotions'
import AutomaticThoughts from './cbt-recorder/recordCreation/AutomaticThoughts'
import Evidence from './cbt-recorder/recordCreation/Evidence'
import AlternateThoughts from './cbt-recorder/recordCreation/AlternateThoughts'



const CBTThoughtRecord = ({match}) => {
  return (
    <ThoughtRecordContextProvider >
      <Switch >
        <Route exact path={match.url} component={ThoughtHome} />
        <Route path={match.url + '/create/situation' } component={Situation} />
        <Route path={match.url + '/create/emotion' } component={Emotions} />
        <Route path={match.url + '/create/automatic-thought' } component={AutomaticThoughts} />
        <Route path={match.url + '/create/evidence' } component={Evidence} />
        <Route path={match.url + '/create/alternate-thoughts' } component={AlternateThoughts} />
      </Switch>
    </ThoughtRecordContextProvider>
  )
}

export default CBTThoughtRecord
