const WINNING_COMBINATIONS = [
    [
        { row: 0, column: 0 },
        { row: 0, column: 1 },
        { row: 0, column: 2 },
    ],
    [
        { row: 1, column: 0 },
        { row: 1, column: 1 },
        { row: 1, column: 2 },
    ],
    [
        { row: 2, column: 0 },
        { row: 2, column: 1 },
        { row: 2, column: 2 },
    ],
    [
        { row: 0, column: 0 },
        { row: 1, column: 0 },
        { row: 2, column: 0 },
    ],
    [
        { row: 0, column: 1 },
        { row: 1, column: 1 },
        { row: 2, column: 1 },
    ],
    [
        { row: 0, column: 2 },
        { row: 1, column: 2 },
        { row: 2, column: 2 },
    ],
    [
        { row: 0, column: 0 },
        { row: 1, column: 1 },
        { row: 2, column: 2 },
    ],
    [
        { row: 0, column: 2 },
        { row: 1, column: 1 },
        { row: 2, column: 0 },
    ],
];

const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const INITIAL_PLAYERS = {
    'X': 'Player 1',
    'O': 'Player 2'
};

export {
    INITIAL_GAME_BOARD,
    WINNING_COMBINATIONS,
    INITIAL_PLAYERS
}