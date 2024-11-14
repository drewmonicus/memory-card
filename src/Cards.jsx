import { useState, useEffect } from "react";

export default function Cards({
  setScore,
  highScore,
  setHighScore,
  selectedCharacters,
  setSelectedCharacters,
}) {
  const [characters, setCharacters] = useState([]);

  const fetchAndRandomizeCharacters = () => {
    const pageNumbers = [1, 2, 3, 4, 5]; // Fetch characters from pages 1 to 5
    const promises = pageNumbers.map((page) =>
      fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(
        (res) => res.json()
      )
    );

    Promise.all(promises)
      .then((results) => {
        // Combine all characters from fetched pages
        const allCharacters = results.flatMap((result) => result.results);

        // Shuffle and select 20 random characters
        const shuffled = allCharacters.sort(() => Math.random() - 0.5);
        setCharacters(shuffled.slice(0, 20));
      })
      .catch((error) => console.error("Error fetching characters:", error));
  };

  useEffect(() => {
    fetchAndRandomizeCharacters(); // Fetch and randomize characters on mount
  }, []);

  const shuffleArray = (array) => {
    const newArray = [...array];

    //fisher yates shuffle
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      const temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    setCharacters(newArray);
  };

  const handleClick = (array, name) => {
    shuffleArray(array);

    if (selectedCharacters.includes(name)) {
      selectedCharacters.length > highScore
        ? setHighScore(selectedCharacters.length)
        : null;
      setScore(0);
      setSelectedCharacters([]);
      console.log("game over");
    } else {
      setScore((prevScore) => prevScore + 1);
      setSelectedCharacters((prevcharacter) => [...prevcharacter, name]);
    }
  };

  return (
    <div className="cards">
      {characters.map((character) => (
        <button
          className="card"
          key={character.name}
          onClick={() => handleClick(characters, character.name)}
        >
          <img className="card--image" src={character.image} alt="" />
          <h3 className="card--name">{character.name}</h3>
        </button>
      ))}
    </div>
  );
}
