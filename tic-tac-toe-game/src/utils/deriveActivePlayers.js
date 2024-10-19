export function deriveActivePlayers(gameTurns) {
    let currentPlayer = 'X';

    if (gameTurns[0] && gameTurns[0].player === 'X') {
        currentPlayer = 'O';
    }

    return currentPlayer
}