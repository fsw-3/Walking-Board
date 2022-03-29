const walkingBoard = (board, arah) => {
    let k = 0;
    while (k < arah.length) {
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === arah[k]) {
                board[i][j] = 'x';
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