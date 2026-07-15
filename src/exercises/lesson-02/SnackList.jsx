// SnackList.jsx

const SnackList = () => {
  const snacks = [
    { name: 'Black Olives', rank: 5 },
    { name: 'Fries', rank: 4 },
    { name: 'Fruits', rank: 3 },
    { name: 'Popcorn', rank: 2 },
    { name: 'Hot Cheetos', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack, index) => (
        <li key={snack.name}>{snack.name}</li>
      ))}
    </ol>
  );
};

export default SnackList;
