import React from 'react';
import HomePage from './HomePage';
import CBTThoughtRecord from './CBTThoughtRecord';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <main className="App">
      <Router >
        <Navbar />
        <Switch >          
          <Route path={'/'} exact component={HomePage} />
          <Route path={'/thought-record'}  component={CBTThoughtRecord} />
        </Switch>
      </Router >
    </main>
  );
}

export default App;
