import React from 'react';
import Header from '../components/Header';
import StartMeditationButton from '../components/StartMeditationButton';
import Footer from '../components/Footer';
import TextInput from '../components/UserInput';
import Quadrant from '../components/Quadrant';

const MainPage = () => {
  const soundscapeButtons = ['Music', 'Nature', 'Rain', 'Celestial', 'Beach', 'Chimes', 'Storm', 'White Noise'];
  const languageButtons = ['English', 'Espanol', 'Deutsch', 'Francais', 'Italiano', 'Portugues', 'Polski', 'Pyccknn'];
  const durationButtons = ['5', '10', '15', '20', '30', '45', '60', '∞'];
  const voiceButtons = ['Willow', 'Atlas', 'Daniel', 'Ester'];

  return (
    <div className="main">
      <Header />
      <TextInput />
      <Quadrant title="Soundscape" buttons={soundscapeButtons} />
      <Quadrant title="Language" buttons={languageButtons} />
      <Quadrant title="Duration" buttons={durationButtons} />
      <Quadrant title="Voice" buttons={voiceButtons} />
      <StartMeditationButton />
      <Footer />
    </div>
  );
};

export default MainPage;



// import React from 'react';
// import Header from '../components/Header';
// import StartMeditationButton from '../components/StartMeditationButton';
// import Footer from '../components/Footer';
// import TextInput from '../components/UserInput';
// import Quadrant from '../components/Quadrant';

// const MainPage = () => {
//   const soundscapeButtons = ['Music', 'Nature', 'Rain', 'Celestial', 'Beach', 'Chimes', 'Storm', 'White Noise'];
//   const languageButtons = ['English', 'Espanol', 'Deutsch', 'Francais', 'Italiano', 'Portugues', 'Polski', 'Pyccknn'];
//   const durationButtons = ['5', '10', '15', '20', '30', '45', '60', '∞'];
//   const voiceButtons = ['Willow', 'Atlas', 'Daniel', 'Ester'];

//   return (
//     <div className="main">
//       <Header />
//       <TextInput />
//       <Quadrant title="Soundscape" buttons={soundscapeButtons} />
//       <Quadrant title="Language" buttons={languageButtons} />
//       <Quadrant title="Duration" buttons={durationButtons} />
//       <Quadrant title="Voice" buttons={voiceButtons} />
//       <StartMeditationButton />
//       <Footer />
//     </div>
//   );
// };

// export default MainPage;
