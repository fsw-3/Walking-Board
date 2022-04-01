function gameControl(board1, arrow) {

  for (let i = 0; i < arrow.length; i++) {

    for (let j = 0; j < board1.length; j++) {

      for (let k = 0; k < board1.length; k++) {


        if (board1[j][k] == '*') {

          if (arrow[i] == '↑') {
            
            board1[j - 1][k] = "*";
            board1[j][k] = " ";

          } else if (arrow[i] == '←') {

            board1[j][k - 1] = "*";
            board1[j][k] = " ";

          } else if (arrow[i] == '↓') {
            
            board1[j][k] = " ";
            board1[j++][k] = " ";
            board1[j][k] = "*";

          } else if (arrow[i] == '→') {
            
            board1[j][k] = " ";
            board1[j][k += 1] = " ";
            board1[j][k] = "*";

          } else {

            console.log("Silakan rubah inputan anda menjadi anak panah");

          }
        }
      }
    }
  }

  return board1;
}
let board1 = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", "*", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
];

var arrow = ['↑', '←', '↑', '→'];
// var arrow = ['↓'];

console.log(gameControl(board1, arrow));

let board2 = [
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", '*', " ", " "],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " "]
]
console.log(gameControl(board2, ['↓', '←', '↑', '→', '→', '↑', '→']))
