// UserInput.js
import React from 'react';

function UserInput({ goal, onGoalChange }) {
  return (
    <div className="input-container">
      <input type="text" className="user-input" placeholder="HOW WOULD YOU LIKE TO MEDITATE TODAY?" value={goal} onChange={(e) => onGoalChange(e.target.value)} />
    </div>
  );
}

export default UserInput;

// import React from 'react';

// const UserInput = () => {
//     return (
//       <div className="input-container">
//         <input type="text" className="user-input" placeholder="HOW WOULD YOU LIKE TO MEDITATE TODAY?" />
//       </div>
//     );
// };

// export default UserInput;