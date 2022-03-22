const gameControl = (arrayBoard, arrayControl) => {
  // Get the coordinate of the '*'
  let oldX, oldY;
  let newX, newY;
  for (let i = 0; i < arrayBoard.length; i++) {
    for (let j = 0; j < arrayBoard[i].length; j++) {
      if (arrayBoard[i][j] == "*") {
        oldX = j;
        newX = j;
        oldY = i;
        newY = i;
      }
    }
  }
  for (let x of arrayControl) {
    switch (x) {
      case "↑":
        newY -= 1;
        if (newY === -1) {
          newY = arrayBoard.length - 1;
        }
        break;
      case "←":
        newX -= 1;
        if (newX === -1) {
          newX = arrayBoard[newY].length - 1;
        }
        break;
      case "↓":
        newY += 1;
        if (newY === arrayBoard.length) {
          newY = 0;
        }
        break;
      case "→":
        newX += 1;
        if (newX === arrayBoard[newY].length) {
          newX = 0;
        }
        break;
    }
  }
  // Switch Place
  [arrayBoard[oldY][oldX], arrayBoard[newY][newX]] = [arrayBoard[newY][newX], arrayBoard[oldY][oldX]];

  return arrayBoard;
};
let control = ["↑", "←", "↑", "→"];
let control2 = ["←", "↑", "←", "→", "↓"];
let board = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "*", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
console.log(gameControl(board, control2));
