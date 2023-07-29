import React from 'react';
import Button from './Button';

const languages = ['English', 'Italiano', 'Español', 'Português', 'Deutsch', 'Polski', 'Français', 'Русский'];

function Language({ selectedLanguage, onLanguageChange }) {
  return (
    <div className="quadrant language">
      <h2>Language</h2>
      <div className="language-options">
        {languages.map((language, index) => (
          <Button
            key={index}
            text={language}
            isSelected={selectedLanguage === language}
            onClick={() => onLanguageChange(language)}
          />
        ))}
      </div>
    </div>
  );
}

export default Language;

// import React, { useState } from 'react';
// import Button from './Button';

// const languages = ['English', 'Italiano', 'Español', 'Português', 'Deutsch', 'Polski', 'Français', 'Русский'];

// function Language() {
//   const [selectedLanguage, setSelectedLanguage] = useState(null);

//   return (
//     <div className="quadrant language">
//       <h2>Language</h2>
//       <div className="language-options">
//         {languages.map((language, index) => (
//           <Button
//             key={index}
//             text={language}
//             isSelected={selectedLanguage === language}
//             onClick={() => setSelectedLanguage(language)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Language;