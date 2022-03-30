const gameControl = (gameBoard, direction) => {
    for (let index = 0; index < direction.length; index++) {
        for (let row = 0; row < gameBoard.length; row++) {
            for (let col = 0; col < gameBoard.length; col++) {
                if (gameBoard[row][col] === '*') {
                    gameBoard[row][col] = '';
                    switch (direction[index]) {
                        case '↑':
                            gameBoard[row - 1][col] = '*';
                            break;
                        case '←':
                            gameBoard[row][col - 1] = '*';
                            break;
                        case '↓':
                            gameBoard[row + 1][col] = '*';
                            break;
                        case '→':
                            gameBoard[row][col + 1] = '*';
                            break;
                        default:
                            console.log('Unknown input!');
                    }
                }
            }
        }
    }
    return gameBoard;
}

let board1 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

console.log(gameControl(board1, ['↑', '←', '↑']))