import './style.css'

let p1 = ''
let p2 = ''

//Winner Display

const winner = document.querySelector('footer')

//Player 1 Options

const playerOneRock = document.querySelector('.player1 .rock')

function handleClickOnPlayerOneRock(event: Event) {
  p1 = 'rock'

  console.debug('p1 clicked the rock')

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
  p1 = 'paper'

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
  p1 = 'scissors'

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
  p1 = 'lizard'

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
  p1 = 'spock'
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

//Player 2 Options

const playerTwoRock = document.querySelector('.player2 .rock')

function handleClickOnPlayerTwoRock(event: Event) {
  console.debug('p2 clicked the rock')
  p2 = 'rock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'rock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

playerTwoRock?.addEventListener('click', handleClickOnPlayerTwoRock)

const playerTwoPaper = document.querySelector('.player2 .paper')
function handleClickOnPlayerTwoPaper(event: Event) {
  console.debug('p2 clicked the paper')
  p2 = 'paper'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'paper') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

playerTwoPaper?.addEventListener('click', handleClickOnPlayerTwoPaper)

const playerTwoScissors = document.querySelector('.player2 .scissors')
function handleClickOnPlayerTwoScissors(event: Event) {
  console.debug('p2 clicked the scissors')
  p2 = 'scissors'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'scissors') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
}

playerTwoScissors?.addEventListener('click', handleClickOnPlayerTwoScissors)

const playerTwoLizard = document.querySelector('.player2 .lizard')
function handleClickOnPlayerTwoLizard(event: Event) {
  console.log('p2 clicked the lizard')
  p2 = 'lizard'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'lizard') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'spock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
}

playerTwoLizard?.addEventListener('click', handleClickOnPlayerTwoLizard)

const playerTwoSpock = document.querySelector('.player2 .spock')
function handleClickOnPlayerTwoSpock(event: Event) {
  console.debug('p2 clicked the spock')
  p2 = 'spock'

  const buttonClicked = event.target

  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'scissors') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'paper') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'rock') {
      if (winner) {
        winner.textContent = 'Player 2 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'lizard') {
      if (winner) {
        winner.textContent = 'Player 1 wins!'
      }
    }
  }
  if (buttonClicked instanceof HTMLButtonElement) {
    if (p1 != '' && p1 === 'spock') {
      if (winner) {
        winner.textContent = 'It was a draw!'
      }
    }
  }
}

playerTwoSpock?.addEventListener('click', handleClickOnPlayerTwoSpock)
