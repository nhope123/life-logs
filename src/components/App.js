import React from 'react';
import HomePage from './HomePage';
import CBTThoughtRecord from './CBTThoughtRecord';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <main className="App">
      <Router >
        <Navbar />
        <Route path={'/'} exact component={HomePage} />
        <Route path={'/thought-record/'} exact component={CBTThoughtRecord} />
      </Router >
    </main>
  );
}

export default App;
