// App.js
import React, { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Soundscape from './components/Soundscape';
import Language from './components/Language';
import Voice from './components/Voice';
import MeditationPage from './components/MeditationPage';
// ... (imports)

function App() {
  const [backgroundMusic, setBackgroundMusic] = useState('rain');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [goal, setGoal] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleBackgroundMusicChange = (music) => {
      console.log('handleBackgroundMusicChange called');

    setBackgroundMusic(music);
  };

  const handleVoiceChange = (voice) => {
    console.log('handleVoiceChange called');
    setSelectedVoice(voice);
  };

  const handleLanguageChange = (language) => {
    console.log('handleLanguageChange called');
    setSelectedLanguage(language);
  };

  const handleGoalChange = (goal) => {
    console.log('handleGoalChange called')
    setGoal(goal);
  };

  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <MainContent
                backgroundMusic={backgroundMusic}
                onBackgroundMusicChange={handleBackgroundMusicChange}
                selectedVoice={selectedVoice}
                onVoiceChange={handleVoiceChange}
                goal={goal}
                onGoalChange={handleGoalChange}
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
              />
            }
          />
          <Route
            path="/meditation"
            element={
              <MeditationPage
                backgroundMusic={backgroundMusic}
                selectedVoice={selectedVoice}
                goal={goal}
                selectedLanguage={selectedLanguage}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

function MainContent({
  backgroundMusic,
  onBackgroundMusicChange,
  selectedVoice,
  onVoiceChange,
  goal,
  onGoalChange,
  selectedLanguage,
  onLanguageChange,
}) {
  return (
    <div className="content">
      <UserInput goal={goal} onGoalChange={onGoalChange} />
      <div className="options">
        <Soundscape backgroundMusic={backgroundMusic} onBackgroundMusicChange={onBackgroundMusicChange} />
        <Language selectedLanguage={selectedLanguage} onLanguageChange={onLanguageChange} />
        <Voice selectedVoice={selectedVoice} onVoiceChange={onVoiceChange} />
      </div>
      <div className="start-button-container">
        <div className="start-button">
          <Link to="/meditation" className="start-button-text" >
            START MEDITATION
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;



// import React, { useState } from 'react';
// import './index.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import UserInput from './components/UserInput';
// import Soundscape from './components/Soundscape';
// import Language from './components/Language';
// import Duration from './components/Duration';
// import Voice from './components/Voice';
// import StartMeditationButton from './components/StartMeditationButton';
// import MeditationPage from './components/MeditationPage'; // Create this component for the meditation page


// function App() {
//   const [backgroundMusic, setBackgroundMusic] = useState('rain'); // Default background music
//   const [selectedVoice, setSelectedVoice] = useState(null);
//   const [goal, setGoal] = useState('');
//   const [selectedLanguage, setSelectedLanguage] = useState(null); // Add state for selectedLanguage

//   const handleBackgroundMusicChange = (music) => {
//     setBackgroundMusic(music);
//   };

//   const handleVoiceChange = (voice) => {
//     setSelectedVoice(voice);
//   };

//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//   };

//   const handleGoalChange = (goal) => {
//     setGoal(goal);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <div className="content">
//           <UserInput goal={goal} onGoalChange={handleGoalChange} />
//           <div className="options">
//             <Soundscape backgroundMusic={backgroundMusic} onBackgroundMusicChange={handleBackgroundMusicChange} />
//             <Language selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />
//             {/* <Duration /> */}
//             <Voice selectedVoice={selectedVoice} onVoiceChange={handleVoiceChange} />
//           </div>
//         </div>
//         <div className="start-button-container">
//           <StartMeditationButton
//             backgroundMusic={backgroundMusic}
//             selectedVoice={selectedVoice}
//             goal={goal}
//             selectedLanguage={selectedLanguage}
//           />
//         </div>
 
//         <Routes>
//           <Route path="/meditation" element={<MeditationPage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
//   // return (

//   //     <div className="App">
//   //     <Header />
//   //     <div className="content">
//   //     <UserInput goal={goal} onGoalChange={handleGoalChange} />
//   //       <div className="options">
//   //          <Soundscape backgroundMusic={backgroundMusic} onBackgroundMusicChange={handleBackgroundMusicChange} />
//   //          <Language selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} /> {/* Pass state and handlers as props */}
//   //         {/* <Duration /> */}
//   //         <Voice selectedVoice={selectedVoice} onVoiceChange={handleVoiceChange} />
//   //       </div>
//   //     </div>
//   //     <div className="start-button-container">
//   //     <StartMeditationButton
//   //       backgroundMusic={backgroundMusic}
//   //       selectedVoice={selectedVoice}
//   //       goal={goal}
//   //       selectedLanguage={selectedLanguage}
//   //     />
//   //     </div>
//   //     </div>
    
//   //   // <div>
//   //   //   {/* Pass state and handlers as props to child components */}
//   //   //   <Soundscape backgroundMusic={backgroundMusic} onBackgroundMusicChange={handleBackgroundMusicChange} />
//   //   //   <Voice selectedVoice={selectedVoice} onVoiceChange={handleVoiceChange} />
//   //   //   <UserInput goal={goal} onGoalChange={handleGoalChange} />
//   //   //   <StartMeditationButton backgroundMusic={backgroundMusic} selectedVoice={selectedVoice} goal={goal} />
//   //   // </div>
//   // );
// }

// export default App;


// // import React from 'react';
// // import './index.css';
// // import Header from './components/Header';
// // import UserInput from './components/UserInput';
// // import Soundscape from './components/Soundscape';
// // import Language from './components/Language';
// // import Duration from './components/Duration';
// // import Voice from './components/Voice';
// // import StartMeditationButton from './components/StartMeditationButton';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Header />
// //       <div className="content">
// //         <UserInput />
// //         <div className="options">
// //           <Soundscape />
// //           <Language />
// //           <Duration />
// //           <Voice />
// //         </div>
// //       </div>
// //       <div className="start-button-container">
// //         <StartMeditationButton />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;