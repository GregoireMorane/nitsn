import React from 'react';

import './App.css';
import ChairSvg from './components/SVG/ChairSvg';
import TestExport from './components/SVG/TestExport';

function App() {
  return (
    <div className="App">
     <ChairSvg width={600} height={700}/>
     <TestExport width={600} height={700}/>
    </div>
  );
}

export default App;
