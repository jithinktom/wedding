import React from 'react';
import Timer from './Components/Timer/Timer';
import './App.scss';

const headerText = "Tany Weds Jithin"

function App() {
  return (
    <div className="App">
      <header>{headerText}</header>
      <Timer /> 
    </div>
  );
}

export default App;
