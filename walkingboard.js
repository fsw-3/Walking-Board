
function gameControl(gameboard1,controller) {
    //set a board
    for (let i = 0; i < gameboard1.length; i++) {
     for (let j = 0; j < gameboard1[i].length; j++) {
       for (let k = 0; k < controller.length; k++) {
         if (gameboard1[i][j] === "*") {
           //conditional up
           if (controller[k] == '↑') {
             gameboard1[i][j] = '';
             i -= 1;
             gameboard1[i][j] ='*';
           } //conditional left
           else if (controller[k] == '←') {
            gameboard1[i][j] = '';
            j -= 1;
            gameboard1[i][j] ='*';
           } //conditional down
           else if (controller[k] == '↓') {
            gameboard1[i][j] = '';
            i += 1;
            gameboard1[i][j] ='*';
           }  //conditional right
           else if (controller[k] == '→') {
            gameboard1[i][j] = '';
            j += 1;
            gameboard1[i][j] ='*';
           } 
         }
       }
      } 
    }
  return gameboard1;
};

let board1 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ];
  console.log(gameControl(board1, ['↑', '←', '↑', '→']));
  
  let board2 = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '*', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
  ]
  console.log(gameControl(board2, ['↓', '←', '↑', '→', '→', '↑', '→']));