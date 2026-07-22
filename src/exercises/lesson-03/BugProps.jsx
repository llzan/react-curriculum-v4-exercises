// src/exercises/lesson-03/BugProps.jsx

/*
  BUG #3 — Props Not Updating

  This component displays a message based on a prop and includes
  a button that should change that message.

  Right now, the message is being stored in a way that React does not track,
  so the UI does not update when the value changes.

  Use the commented "Explanation" section at the bottom of this lesson's components.
*/

import { useState } from 'react';

export default function BugProps({ name = 'friend' }) {
  const [message, setMessage] = useState('Hello, ' + name);

  function handleChange() {
    setMessage('Hi, ' + name + '!');
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleChange}>Change Greeting</button>
    </div>
  );
}

// Explanation:
// The issue was that when I clicked the button, the message was not updating because it was being stored in a state variable that React was not tracking. By using the useState hook to manage the message state, I ensured that React would re-render the component whenever the message changed, allowing the UI to update correctly.
// I also passed the name prop to the component and used it in the message, so that the greeting would reflect the correct name when the button was clicked.
