/*
 *Execution: default node cmd>node game.js
 *Purpose  : To simulate the snake and ladder game
 *@files   : game.js
 *@overview: snake and ladder game simulation
 *@author  : Himanshu Gharat
 *@verson  : 1.0
 *@since   : 15-09-2020
 */

//constant
const startPosition = 0;

//varables
let position = startPosition;

/**
 * @description: create a die roll function for 1 to 6 output
 * @returns: die roll
 */
function dieRoll() {
  return Math.floor((Math.random() * 10) % 6) + 1;
}

/**
 * @description: create a randomOptionGenertor function
 *               for ladder snake or normal move.
 * @returns: random options
 */
function randomOptionGenerator() {
  return Math.floor((Math.random() * 10) % 3) + 1;
}

/**
 * @description: create a playerOptionCheck function
 *               for nove places of ladder snake or normal move.
 * @returns: die roll
 */
function playerOptionCheck() {
  let options = randomOptionGenerator();
  switch (options) {
    case 1:
      position = position + dieRoll();
      break;
    case 2:
      let result = position - dieRoll();
      if (result > 0) position = position - dieRoll();
      else position = position;
      break;
    case 3:
      position = position;
  }
}
while (position<100) {
  playerOptionCheck();
}
console.log(position);
