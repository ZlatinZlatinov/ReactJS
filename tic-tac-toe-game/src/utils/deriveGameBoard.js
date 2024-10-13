import { INITIAL_GAME_BOARD } from "../data/data";

export function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map(arr => [...arr])];

    for (let turn of gameTurns) {
        const { square, player } = turn;
        const { rowIndex, colIndex } = square;

        gameBoard[rowIndex][colIndex] = player;
    }

    return gameBoard;
}