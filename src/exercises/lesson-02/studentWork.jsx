//Lesson-02 Building with ReactDOM and components
//Exercise: Build a "Snack Ranking App" Component in this file
//Import components here

// create these component files (one component per file):
// - SnackHeader.jsx -> default export a s imple component that return the app heading

// - SnackRanking.jsx -> default export a component that contains an array of snack objects (each with name and rank, where `1` = favorite)

// start with the array ordered from **least favorite to most favorite**. Use JavaScript's `.toSorted()` to return a new array ordered from  **most favorite (rank 1) to least favorite**.

// render the sorted snacks as a list (ordered list or using `.map()`), include at least **3-5** snacks.

// **SnackFooter.jsx** -> default export a small component that returns a fun footer message for the app.

import SnackApp from './SnackApp.jsx';

export default function StudentWork() {
  return (
    <div>
      <SnackApp />

      <p> Student output will go here</p>
    </div>
  );
}
