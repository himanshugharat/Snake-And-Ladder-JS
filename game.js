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
  let diceRoll = dieRoll();
  switch (options) {
    case 1:
      let placeResult = position + diceRoll;
      if (placeResult <= 100) position = position + diceRoll;
      else position = position;
      break;
    case 2:
      let place = position - diceRoll;
      if (place > 0) position = position - diceRoll;
      else position = position;
      break;
    case 3:
      position = position;
      break;
  }
}
while (position < 100) {
  playerOptionCheck();
}
console.log(position);
