import './style.css'

let playerOneScore = 0
let playerTwoScore = 0

//Player 1 H3 Score

const playerOneScoreDisplay = document.querySelector('.player1 h3')
console.log(playerOneScoreDisplay)

//Player 1 Options

const playerOneRock = document.querySelector('.player1 .rock')
console.log(playerOneRock)

const playerOnePaper = document.querySelector('.player1 .paper')
console.log(playerOnePaper)

const playerOneScissors = document.querySelector('.player1 .scissors')
console.log(playerOneScissors)

// let p1 = 'rock'
// let p2 = 'scissors'

// const rps = (p1, p2) => {
//   if (p1 == p2) return 'Draw!'

//   if (p1 == 'rock' && p2 == 'scissors') return 'Player 1 won!'
//   else if (p1 == 'scissors' && p2 == 'paper') return 'Player 1 won!'
//   else if (p1 == 'paper' && p2 == 'rock') return 'Player 1 won!'
//   else return 'Player 2 won!'
// }

const rps = (p1, p2) => {
  if (p1 == 'scissors' && p2 == 'paper') {
    console.log('Player 1 won!')
  }
  if (p1 == 'paper' && p2 == 'rock') {
    console.log('Player 1 won!')
  }
  if (p1 == 'rock' && p2 == 'scissors') {
    console.log('Player 1 won!')
  }
  if (p1 == 'paper' && p2 == 'scissors') {
    console.log('Player 2 won!')
  }
  if (p1 == 'rock' && p2 == 'paper') {
    console.log('Player 2 won!')
  }
  if (p1 == 'scissors' && p2 == 'rock') {
    console.log('Player 2 won!')
  }
  if (p1 == 'scissors' && p2 == 'scissors') {
    console.log('Draw!')
  }
  if (p1 == 'rock' && p2 == 'rock') {
    console.log('Draw!')
  }
  if (p1 == 'paper' && p2 == 'paper') {
    console.log('Draw!')
  }
}

// rps('rock', 'scissors')
// rps('scissors', 'scissors')
// rps('paper', 'scissors')
// rps('paper', 'paper')
// rps('rock', 'rock')
