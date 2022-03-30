function gameControl(board,arrow) {   
    let result = [];
    let newRow;
    let newCol;
    //looping untuk menambil baris dan kolom dari bintang dalam board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] == '*') {
                newRow = i;
                newCol = j;
            }
        }            
    }
    
    //looping untuk mengetahui letak baris dan kolom yang baru dari bintang setelah ditentukan melalui arah panah
    for (let i = 0; i < arrow.length; i++) {
        if (arrow[i] == '↑') {
            newRow -= 1;
        }
        else if(arrow[i] == '←'){
            newCol -= 1;
        }
        else if(arrow[i] == '↓'){
            newRow += 1;;
        }
        else{
            newCol += 1;
        }
    }

    //looping untuk membuat array baru yang berisi baris dan kolom baru bintang
    for (let i = 0; i < board.length; i++) {
        let array = [];
        for (let j = 0; j < board.length; j++) {
            if (i == newRow && j == newCol) {
                array.push('*')
            }
            else{
                array.push('');
            }         
        }
        result.push(array);            
    }

    return result
}

let board1 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ]
  

console.log(gameControl(board1, ['↑', '←', '↑', '→']));

let board2 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ]
  console.log(gameControl(board2, ['↓', '←', '↑', '→', '→', '↑', '→']))