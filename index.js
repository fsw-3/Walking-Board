// Definisi Board1
let board1 = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ']
];

// Definisi Board2
let board2 = [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', '*', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ']
];

// Definisi Function gameControl
function gameControl(board, movement){

    // Looping sebanyak jumlah Movement
    for(i = 0; i < movement.length; i++){
        
        // Definisi Variable Row untuk menyimpan lokasi baris
        let row = 0;
        // Definisi Variable Column untuk menyimpan lokasi kolom
        let column = 0;

        // Definisi Variable Max_Row untuk menyimpan total panjang baris
        let max_row = 0;
        // Definisi Variable Max_Column untuk menyimpan total panjang kolom
        let max_column = 0;

        // Looping Validasi baris
        for(j = 0; j < board.length; j++){

            // Looping Validasi kolom
            for(k = 0; k < board[j].length; k++){
                
                // Validasi lokasi 
                switch(board[j][k]){
                    case "*" :
                        row = j;
                        column = k;
                        break;
                }
                // End Validasi lokasi


            }
            // End Looping kolom

        }
        // End Looping baris

        // Menyimpan hasil total panjang baris
        max_row = j;
        // Menyimpan hasil total panjang kolom
        max_column = k;

        // Validasi Movement
        switch(movement[i]){
            case '↑' :

                // Validasi jika Movement melebihi array
                if(board[row - 1] == undefined){
                    board[max_row - 1][column] = "*";
                    board[row][column] = " ";
                } else {
                    board[row - 1][column] = "*";
                    board[row][column] = " ";
                }
                break;

            case '←' :

                // Validasi jika Movement melebihi array
                if(board[column - 1] == undefined){
                    board[row][max_column - 1] = "*";
                    board[row][column] = " ";
                } else {
                    board[row][column - 1] = "*";
                    board[row][column] = " ";
                }
                break;

            case '↓' :

                // Validasi jika Movement melebihi array
                if(board[row + 1] == undefined){
                    board[0][column] = "*";
                    board[row][column] = " ";
                } else {
                    board[row + 1][column] = "*";
                    board[row][column] = " ";
                }
                break;

            case '→' :

                // Validasi jika Movement melebihi array
                if(board[column + 1] == undefined){
                    board[row][0] = "*";
                    board[row][column] = " ";
                } else {
                    board[row][column + 1] = "*";
                    board[row][column] = " ";
                }
                break;
                
        }
        // End Validasi Movement

    }
    // End Looping Movement

    return board;
}

console.log(gameControl(board1, ['↑', '←', '↑', '→']))
console.log(gameControl(board2, ['↓', '←', '↑', '→', '→', '↑', '→']))
