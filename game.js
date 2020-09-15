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

/**
 * @description: create a die roll function for 1 to 6 output
 * @returns: die roll
 */
function dieRoll() {
  return Math.floor((Math.random() * 10) % 6) + 1;
}
