import { useState } from "react"
import GameBoard from "./components/game-board/GameBoard"
import Players from "./components/players/Players"
import Log from "./components/game-log/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  

  function handlePlayerTurn() {
    setActivePlayer(currPlayer => currPlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <Players activePlayer={activePlayer} />
        <GameBoard onSelectSquare={handlePlayerTurn} activePlayer={activePlayer}/>
      </div> 

      <Log />
    </main>
  )
}

export default App
