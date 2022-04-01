function gameControl(board, direction) {

    let i = 0;
    while (i < board.length) {
        // console.log(board[i]);
        for (let j = 0; j < board[i].length; j++) {

            if (board[i][j] == "*") {
                for (let k = 0; k < direction.length; k++) {
                    if (direction[k] == '↑') {
                        board[i][j] = '';
                        i = i - 1;
                        board[i][j] = '*';
                    }
                    if (direction[k] == '←') {
                        board[i][j] = '';
                        j = j - 1;
                        board[i][j] = '*';
                    }
                    if (direction[k] == '↓') {
                        board[i][j] = '';
                        i = i + 1;
                        board[i][j] = '*';
                    }
                    if (direction[k] == '→') {
                        board[i][j] = '';
                        j = j + 1;
                        board[i][j] = '*';
                    }
                }
            }
        }

        i++;
    }
    return board;
}

let board1 = [
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '*', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
]

// console.log(gameControl(board1, ['↑', '←', '↑', '→']))
// console.log(gameControl(board1, ['↑','←']))
let board2 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ]
  console.log(gameControl(board2, ['↓', '←', '↑', '→', '→', '↑', '→']))