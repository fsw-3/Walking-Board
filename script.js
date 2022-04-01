function gameControl(board, direction) {

    let i = 0;
    while (i < board.length) {
        // console.log(board[i]);
        // console.log('\n');
        for (let j = 0; j < board[i].length; j++) {
            console.log(board[i][j].length);
            // for (let k = 0; k < direction.length; k++) {
            //     if (board[i][j] == "*") {
            //         if (direction[k] == '↑') {
            //             board[i][j] = '';
            //             i = i - 1;
            //             board[i][j] = '*';
            //         }
            //     }
            // }
        }
        
        i++;
    }
    // return bosard;
}

let board1 = [
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '*', '0', '0'],
    ['0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
]

console.log(gameControl(board1, ['↑', '←', '↑', '→']))