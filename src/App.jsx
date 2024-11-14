import Cards from "./Cards";
import Header from "./Header";
import { useState, useEffect } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  return (
    <>
      <Header
        score={score}
        highScore={highScore}
        selectedEmojis={selectedCharacters}
      />
      <Cards
        setScore={setScore}
        highScore={highScore}
        selectedCharacters={selectedCharacters}
        setSelectedCharacters={setSelectedCharacters}
        setHighScore={setHighScore}
      />
    </>
  );
}

export default App;
