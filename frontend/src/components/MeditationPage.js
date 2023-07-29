import React, { useEffect, useRef, useState } from 'react';

function MeditationPage({ backgroundMusic, selectedVoice, goal, selectedLanguage }) {
  const audioElementRef = useRef(null);
  const [audioFetched, setAudioFetched] = useState(false);


  useEffect(() => {
    if (audioFetched ) {
      return; // Audio already fetched and played, no need to do it again.
    }

    const fetchAndPlayAudio = async () => {
      const audioElement = audioElementRef.current;

      // Check if audio is already playing, then return
      if (audioElement && !audioElement.paused) {
        return;
      }

      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        "background": backgroundMusic,
        "username": "test",
        "goal": goal,
        "voice_name": selectedVoice,
        "language": selectedLanguage
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      try {
        const response = await fetch('http://127.0.0.1:5000/generate_meditation', requestOptions);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);

        if (audioElement) {
          audioElement.src = audioUrl;
          audioElement.play();
          setAudioFetched(true);
        }
      } catch (error) {
        console.log('Fetch error: ', error);
      }
    };

    fetchAndPlayAudio();
  }, [backgroundMusic, selectedVoice, goal, selectedLanguage]);

  return (
    <div>
      <h2>Meditation Page</h2>
      <audio ref={audioElementRef} controls>
        Your browser does not support the audio element.
      </audio>
      {/* Add your meditation content here */}
    </div>
  );
}

export default MeditationPage;

// // MeditationPage.js
// import React, { useEffect } from 'react';

// function MeditationPage({ backgroundMusic, selectedVoice, goal, selectedLanguage }) {
//   useEffect(() => {
//     // Fetch and play the audio here
//     const fetchAndPlayAudio = async () => {
//       var myHeaders = new Headers();
//       myHeaders.append('Content-Type', 'application/json');

//       var raw = JSON.stringify({
//         "background": backgroundMusic,
//         "username": "test",
//         "goal": goal,
//         "voice_name": selectedVoice,
//         "language": selectedLanguage
//       });

//       var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow',
//       };

//       try {
//         const response = await fetch('http://127.0.0.1:5000/generate_meditation', requestOptions);

//         // Check if the request was successful
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const audioBlob = await response.blob();
//         const audioUrl = URL.createObjectURL(audioBlob);
//         const audioElement = new Audio(audioUrl);
//         audioElement.play();
//       } catch (error) {
//         console.log('Fetch error: ', error);
//       }
//     };

//     fetchAndPlayAudio();
//   }, [backgroundMusic, selectedVoice, goal, selectedLanguage]);

//   return (
//     <div>
//       <h2>Meditation Page</h2>
//       {/* Add your meditation content here */}
//     </div>
//   );
// }

// export default MeditationPage;
