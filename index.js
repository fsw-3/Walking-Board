function gameControl(board, control){
    let result = [];
    let baris1, kolom1, baris2, kolom2;
    // melakukan looping array board
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            // menentukan posisi array board bernilai *
            if(board[i][j] == '*'){
                // menyimpan nilai untuk array lama
                baris1 = i;
                kolom1 = j;
                // menyimpan nilai untuk array baru
                baris2 = i;
                kolom2 = j;
            }
        }
    }
    // melakukan looping array control
    for(let i=0; i<control.length; i++){
        for(let j=0; j<control.length; j++){
            // seleksi kondisi array control dan update nilai array baru
            if(control[i][j] == '↑') {
                baris2 -= 1;
            }else if(control[i][j] == '↓'){
                baris2 += 1;
            }else if(control[i][j] == '←'){
                kolom2 -= 1;
            }else if(control[i][j] == '→'){
                kolom2 += 1;      
            }
        }
    }
    // melakukan pertukaran nilai dari posisi array lama dengan array baru
    result = board[baris2][kolom2];
    board[baris2][kolom2] = board[baris1][kolom1];
    board[baris1][kolom1] = result;

    return board;
}

let board1 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]
  
console.log(gameControl(board1, ['↑', '←', '↑', '→']))

let board2 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
]

console.log(gameControl(board2, ['↓', '←', '↑', '→', '→', '↑', '→']))