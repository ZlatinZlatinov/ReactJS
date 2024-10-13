import { useState } from "react"
import GameBoard from "./components/game-board/GameBoard"
import Players from "./components/players/Players"
import Log from "./components/game-log/Log";
import { deriveActivePlayers } from "./utils/deriveActivePlayers";

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayers(gameTurns);

  function handlePlayerTurn(rowIndex, colIndex) {
    // setActivePlayer(currPlayer => currPlayer === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayers(prevTurns);

      const updatedTurns = [{
        square: { rowIndex, colIndex },
        player: currentPlayer
      },
      ...prevTurns];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <Players activePlayer={activePlayer} />
        <GameBoard
          onSelectSquare={handlePlayerTurn}
          turns={gameTurns} />
      </div>

      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
