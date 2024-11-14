export default function Header({ score, highScore, refreshCharacters }) {
  return (
    <div className="header">
      <div className="header--card">
        <h1>Rick and Morty Memory Card</h1>
        <h4>
          Get points by clicking on an image, but dont click more than once!
        </h4>
      </div>

      <div className="score-card">
        <div>Current Score: {score}</div>
        <div>Highest Score: {highScore}</div>
      </div>
    </div>
  );
}
