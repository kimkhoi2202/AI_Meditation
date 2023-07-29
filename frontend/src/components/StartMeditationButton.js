// StartMeditationButton.js
import React from 'react';
import { Link } from 'react-router-dom';

function StartMeditationButton() {
  return (

    <div className="start-button-container">
      <div className="start-button">
      <Link to="/meditation" className="start-button-text">
        START MEDITATION
      </Link>
      </div>
    </div>
  );
}

export default StartMeditationButton;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function StartMeditationButton({ backgroundMusic, selectedVoice, goal,selectedLanguage }) {
//   const navigate = useNavigate();
//   const handleClick = async () => {
//     navigate('/meditation');
//     var myHeaders = new Headers();
//     myHeaders.append('Content-Type', 'application/json');

//     var raw = JSON.stringify({
//       "background": backgroundMusic,
//       "username": "test",
//       "goal": goal,
//       "voice_name": selectedVoice,
//       "language": selectedLanguage
//     });

//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow',
//     };

//     try {
//       const response = await fetch('http://127.0.0.1:5000/generate_meditation', requestOptions);

//       // Check if the request was successful
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const audioBlob = await response.blob();
//       const audioUrl = URL.createObjectURL(audioBlob);
//       const audioElement = new Audio(audioUrl);
//       audioElement.play();
//     } catch (error) {
//       console.log('Fetch error: ', error);
//     }
    

//   };
//   return (
//         <div className="start-button-container">
//           <div className="start-button" onClick={handleClick}>
//               <div className="start-button-text">
//                   START MEDITATION
//               </div>
//           </div>
//         </div>
//       );
//   // return <button onClick={handleClick}>Start Meditation</button>;
// }

// export default StartMeditationButton;

// import React from 'react';

// const StartMeditationButton = () => {
//   const handleClick = async () => {
//     const goal = document.querySelector('.user-input').value;

//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     var raw = JSON.stringify({
//       "background": "rain",
//       "username": "test",
//       "goal": goal,
//     });

//     var requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: raw,
//       redirect: 'follow'
//     };

//     try {
//       const response = await fetch("http://127.0.0.1:5000/generate_meditation", requestOptions);

//       // Check if the request was successful
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const audioBlob = await response.blob();
//       const audioUrl = URL.createObjectURL(audioBlob);
//       const audioElement = new Audio(audioUrl);
//       audioElement.play();
//     } catch (error) {
//       console.log('Fetch error: ', error);
//     }
//   };

//   return (
//     <div className="start-button-container">
//       <div className="start-button" onClick={handleClick}>
//           <div className="start-button-text">
//               START MEDITATION
//           </div>
//       </div>
//     </div>
//   );
// };

// export default StartMeditationButton;
