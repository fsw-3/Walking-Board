function gameControl(board, move) {
  for (let a = 0; a < board.length; a++) {
    for (let b = 0; b < board[a].length; b++) {
      for (let c = 0; c < move.length; c++) {
        if (board[a][b] === "*") {
          if (move[c] == "↑") {
            if (a - 1 >= 0) {
              board[a][b] = "";
              board[a - 1][b] = "*";
            }
          } else if (move[c] == "←") {
            if (b - 1 >= 0) {
              board[a][b] = "";
              board[a][b - 1] = "*";
            }
          } else if (move[c] == "↓") {
            if (a + 1 < board.length) {
              board[a][b] = "";
              board[a + 1][b] = "*";
            }
          } else if (move[c] == "→") {
            if (b + 1 < board[a].length) {
              board[a][b] = "";
              board[a][b + 1] = "*";
            }
          }
        }
      }
    }
  }
  return board;
}

// Contoh 1:
let board1 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "*", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
console.log(gameControl(board1, ["↑", "←", "↑", "→"]));
// output
// [
//   ['', '', '*', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', '']
// ]
// Contoh 2:
let board2 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "*", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
console.log(gameControl(board2, ["↓", "←", "↑", "→", "→", "↑", "→"]));
//output
// [
//   ['', '', '', '', ''],
//   ['', '', '', '', '*'],
//   ['', '', '', '', ''],
//   ['', '', '', '', ''],
//   ['', '', '', '', '']
// ]
