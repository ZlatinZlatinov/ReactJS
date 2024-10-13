import { useState } from "react"
import GameBoard from "./components/game-board/GameBoard"
import Players from "./components/players/Players"
import Log from "./components/game-log/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handlePlayerTurn(rowIndex, colIndex) {
    setActivePlayer(currPlayer => currPlayer === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns[0] && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

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
