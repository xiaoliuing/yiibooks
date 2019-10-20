import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from '../router';

function App() {

  return (
    <Router basename="/">
      {Route()}
    </Router>
  )
}

export default App;
