import './style.css'

let playerOneScore = 0
let playerTwoScore = 0

//Player 1 H3 Score

const playerOneScoreDisplay = document.querySelector('.player1 h3')
console.log(playerOneScoreDisplay)

//Player 1 Options

const playerOneRock = document.querySelector('.player1 .rock')

function handleClickOnPlayerOneRock() {
  console.log('I clicked the rock')
  let p1 = 'rock'
  return p1
}

playerOneRock?.addEventListener('click', handleClickOnPlayerOneRock)

const playerOnePaper = document.querySelector('.player1 .paper')
function handleClickOnPlayerOnePaper() {
  console.log('I clicked the paper')
  let p1 = 'paper'
  return p1
}

playerOnePaper?.addEventListener('click', handleClickOnPlayerOnePaper)

const playerOneScissors = document.querySelector('.player1 .scissors')
function handleClickOnPlayerOneScissors() {
  console.log('I clicked the scissors')
  let p1 = 'scissors'
  return p1
}

playerOneScissors?.addEventListener('click', handleClickOnPlayerOneScissors)

//Player 2 H3 Score

const playerTwoScoreDisplay = document.querySelector('.player2 h3')
console.log(playerTwoScoreDisplay)

//Player 2 Options

const playerTwoRock = document.querySelector('.player2 .rock')

function handleClickOnPlayerTwoRock() {
  console.log('I clicked the rock')
  let p2 = 'rock'
  return p2
}

playerTwoRock?.addEventListener('click', handleClickOnPlayerTwoRock)

const playerTwoPaper = document.querySelector('.player2 .paper')
function handleClickOnPlayerTwoPaper() {
  console.log('I clicked the paper')
  let p2 = 'paper'
  return p2
}

playerTwoPaper?.addEventListener('click', handleClickOnPlayerTwoPaper)

const playerTwoScissors = document.querySelector('.player2 .scissors')
function handleClickOnPlayerTwoScissors() {
  console.log('I clicked the scissors')
  let p2 = 'scissors'
  return p2
}

playerTwoScissors?.addEventListener('click', handleClickOnPlayerTwoScissors)

//Scoring
function Scoring(p1, p2) {
  {
    if (p1 == 'scissors' && p2 == 'paper') {
      window.alert('Player 1 won!')
    }
    if (p1 == 'paper' && p2 == 'rock') {
      window.alert('Player 1 won!')
    }
    if (p1 == 'rock' && p2 == 'scissors') {
      window.alert('Player 1 won!')
    }
    if (p1 == 'paper' && p2 == 'scissors') {
      window.alert('Player 2 won!')
    }
    if (p1 == 'rock' && p2 == 'paper') {
      window.alert('Player 2 won!')
    }
    if (p1 == 'scissors' && p2 == 'rock') {
      window.alert('Player 2 won!')
    }
    if (p1 == 'scissors' && p2 == 'scissors') {
      window.alert('Draw!')
    }
    if (p1 == 'rock' && p2 == 'rock') {
      window.alert('Draw!')
    }
    if (p1 == 'paper' && p2 == 'paper') {
      window.alert('Draw!')
    }
  }
}

// rps('rock', 'scissors')
// rps('scissors', 'scissors')
// rps('paper', 'scissors')
// rps('paper', 'paper')
// rps('rock', 'rock')
