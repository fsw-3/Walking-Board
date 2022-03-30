let board1 = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ']
  ]

function gameControl(board, movement){
    let result = [];

    for(i = 0; i < movement.length; i++){
        let pesan = "";
        let row = 0;
        let column = 0;
        for(j = 0; j < board.length; j++){
            result[j] = [];
            for(k = 0; k < board[j].length; k++){
                switch(board[j][k]){
                    case "*" :
                        row = j;
                        column = k;
                }
            }
        }
        console.log("ini baris : " + (row + 1));
        console.log("ini kolom : " + (column + 1));
        //return pesan;
    }
}

console.log(gameControl(board1, ['↑', '←']))

// ['↑', '←', '↑', '→']