export default function GameOver({ winnerName, handleRestart }) {
    return (
        <div id="game-over">
            <h2>Game over!</h2>
            <p>{winnerName ? `${winnerName} won!` : `It's a draw!`}</p>
            <p><button onClick={handleRestart}>Rematch</button></p>
        </div>
    );
}