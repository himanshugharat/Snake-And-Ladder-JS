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
let countOfDieRolled=0

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
      if (placeResult <= 100) {
        position = position + diceRoll;
        console.log(`after the ladder you are at ${position}`);
      } else {
        position = position;
        console.log(`at same postion ${position}`);
      }
      break;
    case 2:
      let place = position - diceRoll;
      if (place > 0) {
        position = position - diceRoll;
        console.log(`after the snake bite you are at ${position}`);
      } else {
        position = position;
        console.log(`at same position ${position}`);
      }
      break;
    case 3:
      position = position;
      console.log(`at same position noplay option ${position}`);
      break;
  }
}
while (position < 100) {
    countOfDieRolled++
  playerOptionCheck();
}
console.log(position);
console.log(`the total number of diece rolled are ${countOfDieRolled}`);
