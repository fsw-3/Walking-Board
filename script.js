const gameControl = (gameBoard, direction) => {
    index = 0;
    while (index < direction.length) {
        for (let row = 0; row < gameBoard.length; row++) {
            for (let col = 0; col < gameBoard.length; col++) {
                if (gameBoard[row][col] === '*') {
                    switch (direction[index]) {
                        case '↑':
                            gameBoard[row][col] = '';
                            gameBoard[row - 1][col] = '*';
                            break;
                        case '←':
                            gameBoard[row][col] = '';
                            gameBoard[row][col - 1] = '*';
                            break;
                        case '↓':
                            gameBoard[row][col] = '';
                            gameBoard[row + 1][col] = '*';
                            break;
                        case '→':
                            gameBoard[row][col] = '';
                            gameBoard[row][col + 1] = '*';
                            break;
                        default:
                            gameBoard[row][col] = '*';
                    }
                    index++;
                }
            }
        }
    }
    return gameBoard;
}

// driver code

let board1 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]
let board2 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

console.log(gameControl(board1, ['↑', '←', '↑', '→']))
console.log(gameControl(board2, ['↓', '←', '↑', '→', '→', '↑', '→']))