const walkingBoard = (board, arah) => {
    let i = 0;
    while (i < arah.length) {
      for (let j = 0; j < board.length; j++) {
        for (let k = 0; k < board[j].length; k++) {
          if (board[j][k] === arah[i]) {
              board[j][k] = 'x';
          }
          if (board[j][k] == "*") {
            if (arah[i] == "↑") {
              if (j - 1 >= 0) {
                board[j - 1][k] = "*";
                board[j][k] = "";
              }
            } else if (arah[i] == "←") {
                if (k - 1 >= 0) {
                  board[j][k - 1] = "*";
                  board[j][k] = "";
                }
            } else if (arah[i] == "↓") {
                if (i + 1 < board.length) {
                  board[j + 1][k] = "*";
                  board[j][k] = "";
                }
            } else if (arah[i] == "→") {
                if (k + 1 < board[j].length) {
                  board[j][k + 1] = "*";
                  board[j][k] = "";
                }
            }
            i++;
          }
        }
      }
    }
    return board;
  };
  
  let board = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "*", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];
  
  console.log(walkingBoard(board, ["↑", "←", "↑", "→"]));