import React from 'react';
import LandingPage from './Components/LandingPage/LandingPage';
import Invitation from './Components/Invitation/Invitation';
import Gallery from './Components/Gallery/Gallery';
import Location from './Components/Location/Location';
import SaveDate from './Components/SaveDate/SaveDate';
import './App.scss';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SaveDate />
      <Location />
      <Gallery />
      <Invitation />
      <footer>
        &copy; Jithin K Tom @ 2018
      </footer>
    </div>
  );
}

export default App;
