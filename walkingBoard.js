
let x = ['','*','']

function bintangGeser(board ,arrow) {
    for (let i = 0; i < board.length; i++) {
        if (arrow == '->') {
            if (board[i] == '*') {
                let tmp = board[i];
                board[i] = board[i + 1];
                board[i + 1] = tmp;
            }
        }
        return board;
    }
}

console.log(bintangGeser(x,'->'));
