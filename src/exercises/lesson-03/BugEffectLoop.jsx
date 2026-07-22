//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((previous) => previous + 1);
  }, []); // The empty dependency array ensures the effect runs only once after the initial render.

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// (Write your explanation here)
// The useEffect's goal is to increment the count state variable by 1 but the effect runs after ever render causing an infinite loop. I added a dependencey array so that the effect only runs once after the inital render.
