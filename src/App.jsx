import { useState } from "react";
import "./App.css";
const App = () => {
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  const playGame = (e) => {
    e.preventDefault();
    setChnaces(chances - 1);
    if (userInput == answer) {
      setMessage("you won");
      setGameover(true);
    } else if (userInput > answer) {
      setMessage("you are too high");
    } else if (userInput < answer) {
      setMessage("you are too low");
    }
    if (chances === 0) {
      setGameover(true);
    }
  };
  const resetGame = (e) => {
    e.preventDefault();
    setAnswer(generateRandomNumber());
    setChnaces(8);
    setUserInput("");
    setMessage(null);
    setGameover(false);
  };

  const [userInput, setUserInput] = useState(null);
  const [answer, setAnswer] = useState(generateRandomNumber());
  const [chances, setChnaces] = useState(8);
  const [message, setMessage] = useState(null);
  const [gameover, setGameover] = useState(false);
  console.log(answer);
  return (
    <>
      <div className="card">
        <h1>guess number from 1 to 100</h1>
        <p>{message}</p>
        <form onSubmit={gameover ? resetGame : playGame}>
          <input
            type="number"
            min={1}
            max={100}
            required
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button type="submit">{gameover ? "reset" : "play"}</button>
        </form>
        <p>you have {chances} chances</p>
      </div>
    </>
  );
};

export default App;
