import './style.css'

let playerOneScore = 0
let playerTwoScore = 0

let p1 = ''
let p2 = ''
//**REVIST**
const winner = document.querySelector('footer')

//Reset Button

const resetButton = document.querySelector('.reset')

function handleClickOnResetButton() {
  console.log('I clicked the reset')
  let reset = 'reset'
  return reset
}

resetButton?.addEventListener('click', handleClickOnResetButton)

// //Player 1 H3 Score Display

// const playerOneScoreDisplay = document.querySelector('.player1 h3')

// //Player One Score

// const playerOneScore = document.querySelector('.player1 h3')

// function handleClickOnPlayerOneScore() {
//   playerOneScore++

//   if (playerOneScoreDisplay) {
//     playerOneScoreDisplay.textContent = `${playerOneScore}`
//     window.alert('Player 1 Won!!')
//   }
// }

// playerOneScore?.addEventListener('value', handleClickOnPlayerOneScore)

//Player 1 Options

const playerOneRock = document.querySelector('.player1 .rock')

function handleClickOnPlayerOneRock(event: Event) {
  console.debug('p1 clicked the rock')
  let p1 = 'rock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'rock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

playerOneRock?.addEventListener('click', handleClickOnPlayerOneRock)

const playerOnePaper = document.querySelector('.player1 .paper')
function handleClickOnPlayerOnePaper(event: Event) {
  console.debug('p1 clicked the paper')
  let p1 = 'paper'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'paper') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

playerOnePaper?.addEventListener('click', handleClickOnPlayerOnePaper)

const playerOneScissors = document.querySelector('.player1 .scissors')
function handleClickOnPlayerOneScissors(event: Event) {
  console.debug('p1 clicked the scissors')
  let p1 = 'scissors'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'scissors') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

playerOneScissors?.addEventListener('click', handleClickOnPlayerOneScissors)

const playerOneLizard = document.querySelector('.player1 .lizard')
function handleClickOnPlayerOneLizard(event: Event) {
  console.debug('p1 clicked the lizard')
  let p1 = 'lizard'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'lizard') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

playerOneLizard?.addEventListener('click', handleClickOnPlayerOneLizard)

const playerOneSpock = document.querySelector('.player1 .spock')
function handleClickOnPlayerOneSpock(event: Event) {
  console.debug('p1 clicked the spock')
  let p1 = 'spock'
  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p2 != '' && p2 === 'spock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
}

playerOneSpock?.addEventListener('click', handleClickOnPlayerOneSpock)

//Player 2 H3 Score

const playerTwoScoreDisplay = document.querySelector('.player2 h3')

//Player 2 Options

const playerTwoRock = document.querySelector('.player2 .rock')

function handleClickOnPlayerTwoRock(event: Event) {
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
function handleClickOnPlayerTwoScissors(event: Event) {
  console.log('I clicked the scissors')
  let p2 = 'scissors'
  return p2
}

playerTwoScissors?.addEventListener('click', handleClickOnPlayerTwoScissors)

const playerTwoLizard = document.querySelector('.player2 .lizard')
function handleClickOnPlayerTwoLizard() {
  console.log('p2 - I clicked the lizard')
  let p2 = 'lizard'
  return p2
}

playerTwoLizard?.addEventListener('click', handleClickOnPlayerTwoLizard)

const playerTwoSpock = document.querySelector('.player2 .spock')
function handleClickOnPlayerTwoSpock(event: Event) {
  console.log('p2 - I clicked the spock')
  let p2 = 'spock'
  return p2
}

playerTwoSpock?.addEventListener('click', handleClickOnPlayerTwoSpock)

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
