import React from 'react';
import CVCreative from './components/CVCreative';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
       <CVCreative />
    </div>
    </Router>
  );
}

export default App;