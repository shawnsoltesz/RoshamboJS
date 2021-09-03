Codewar: https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','scissors') // Draw!
rps('paper','paper') // Draw!
rps('rock','rock') // Draw!

rps('scissors','paper') // Player 1 won!
rps('rock','scissors') // Player 1 won!
rps('paper','rock') // Player 1 won!

rps ('rock','paper') // Player 2 won!
rps('paper','scissors') // Player 2 won!
rps('scissors','rock') // Player 2 won!

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!

Data:

Algorithm:

Declare a variable for playerSelections (p1, p2)
Establish if statements with the examples above
Return the winner based on the if statements

Code:

const rps = (p1, p2) => {
if (p1 == p2)
return 'Draw!';

if (p1 == 'rock' && p2 == 'scissors')
return 'Player 1 won!'
else if (p1 == 'scissors' && p2 == 'paper')
return 'Player 1 won!'
else if (p1 == 'paper' && p2 == 'rock')
return 'Player 1 won!'
else
return 'Player 2 won!';
};
