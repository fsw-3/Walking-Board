function gameControl(board, control){
    // melakukan looping array board
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            // menentukan posisi array board bernilai *
            if(board[i][j] == '*'){
                console.log(board[i][j]);
                console.log(`posisi array bernilai * ada di baris ke ${i} kolom ke ${j}`);
            }
        }
    }
}

let board1 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];
  
console.log(gameControl(board1, ['↑', '←', '↑', '→']));