function gameControl(board,array) {
    console.log(board);
    console.log(array);
    let result = [];
    let x;
    let y;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] == '*') {
                x = i;
                y = j;
            }
        }            
    }
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '↑') {
            x -= 1;
        }
        else if(array[i] == '←'){
            y -= 1;
        }
        else if(array[i] == '↓'){
            x += 1;;
        }
        else{
            y += 1;
        }
    }

    for (let i = 0; i < board.length; i++) {
        let tes = [];
        for (let j = 0; j < board.length; j++) {
            if (i == x && j == y) {
                tes.push('*')
            }
            else{
                tes.push('');
            }         
        }
        result.push(tes);            
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