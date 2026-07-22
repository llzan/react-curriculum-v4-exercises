// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useState } from 'react';
export default function BugMutatedState() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1); // This line is fine, but if we were to mutate the state directly (e.g., count++), it would cause issues. Always use the setter function to update state.
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// At first glance, the state update seems fine. However, if we were to directly mutate the state (e.g., using count++), it would not trigger a re-render and cause unexpected behavior.
