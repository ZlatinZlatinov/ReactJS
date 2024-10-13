import { useState } from "react";

import GameBoard from "./components/game-board/GameBoard";
import Players from "./components/players/Players";
import Log from "./components/game-log/Log";
import { deriveActivePlayers } from "./utils/deriveActivePlayers";
import { initialGameBoard, WINNING_COMBINATIONS } from "./data/data";
import GameOver from "./components/game-over/GameOver";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayers(gameTurns);

  let gameBoard = [...initialGameBoard.map(arr => [...arr])];
  let winner;

  for (let turn of gameTurns) {
    const { square, player } = turn;
    const { rowIndex, colIndex } = square;

    gameBoard[rowIndex][colIndex] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }

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
  
  return (
    <main>
      <div id="game-container">
        <Players activePlayer={activePlayer} />
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
