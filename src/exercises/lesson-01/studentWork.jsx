//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Lay Lay Zan';
  const age = 27;

  const hobbies = ['Hiking', 'Cooking', 'Reading', 'Traveling', 'Soccer'];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        I am {name}, and I am {age} years old. I am an asipiring UX/UI Designer
        based in Saint Paul, Minnesota.
      </p>
      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
// Screenshot of rendered page
