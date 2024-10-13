const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns}) {
    let gameBoard = initialGameBoard; 

    //loop will not execute in there is empty array
    for(let turn of turns) {
       const {square, player} = turn;
       const {rowIndex, colIndex} = square; 
       
       gameBoard[rowIndex][colIndex] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handlePlayerSelect(rowIndex, colIndex) {
    //     console.log(`Button clicked at position x: ${rowIndex} y: ${colIndex}`);

    //     setGameBoard((oldBoard) => {
    //         const newBoard = [...oldBoard.map(inner => [...inner])];

    //         newBoard[rowIndex][colIndex] = activePlayer;

    //         return newBoard;
    //     });

    //     onSelectSquare();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>)}
                        </ol>
                    </li>
                );
            })}
        </ol>
    );
}