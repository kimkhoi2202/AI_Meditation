import React from 'react';
import './index.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Soundscape from './components/Soundscape';
import Language from './components/Language';
import Duration from './components/Duration';
import Voice from './components/Voice';
import StartMeditationButton from './components/StartMeditationButton';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <UserInput />
        <div className="options">
          <Soundscape />
          <Language />
          <Duration />
          <Voice />
        </div>
      </div>
      <div className="start-button-container">
        <StartMeditationButton />
      </div>
    </div>
  );
}

export default App;