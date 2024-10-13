import { useState } from "react";

import GameBoard from "./components/game-board/GameBoard";
import Players from "./components/players/Players";
import Log from "./components/game-log/Log";
import { deriveActivePlayers } from "./utils/deriveActivePlayers";
import GameOver from "./components/game-over/GameOver";
import { deriveWinner } from "./utils/deriveWinner";
import { deriveGameBoard } from "./utils/deriveGameBoard";
import { INITIAL_PLAYERS } from "./data/data";

function App() {
  const [initialPlayers, setPlayers] = useState(INITIAL_PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayers(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  
  const winner = deriveWinner(gameBoard, initialPlayers);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handlePlayerTurn(rowIndex, colIndex) {

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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <Players activePlayer={activePlayer} onChangeName={handlePlayerNameChange} />
        {(winner || hasDraw) && <GameOver winnerName={winner} handleRestart={handleRestart} />}
        <GameBoard
          onSelectSquare={handlePlayerTurn}
          board={gameBoard} />
      </div>

      <Log turns={gameTurns} />
    </main>
  )
}

export default App
