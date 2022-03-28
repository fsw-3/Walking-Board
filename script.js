const gameControl = (board, control) => {
  let k = 0;
  // untuk mengulang array control
  while (k < control.length) {
    // mengulang isi array dimensi ke 1
    for (let i = 0; i < board.length; i++) {
      // mengulang isi array dimensi ke 2
      for (let j = 0; j < board[i].length; j++) {
        // jika isi array adalah * maka gerakan sesuai control
        if (board[i][j] == "*") {
          if (control[k] == "↑") {
            if (i - 1 >= 0) {
              board[i - 1][j] = "*";
              board[i][j] = "";
            }
          } else if (control[k] == "↓") {
            if (i + 1 < board.length) {
              board[i + 1][j] = "*";
              board[i][j] = "";
            }
          } else if (control[k] == "←") {
            if (j - 1 >= 0) {
              board[i][j - 1] = "*";
              board[i][j] = "";
            }
          } else if (control[k] == "→") {
            if (j + 1 < board[i].length) {
              board[i][j + 1] = "*";
              board[i][j] = "";
            }
          }
          k++;
        }
      }
    }
  }

  return board;
};

let board1 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "*", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

console.log(gameControl(board1, ["↑", "←", "↑", "→"]));

let board2 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "*", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

console.log(gameControl(board2, ["↓", "←", "↑", "→", "→", "↑", "→"]));
