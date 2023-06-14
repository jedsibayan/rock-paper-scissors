const options = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  let randomIndex =  Math.floor(Math.random() * options.length)
  console.log()
  return options[randomIndex]
}

function checkWinner (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie'
    } else if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper'
    ) {
        return 'player'
    } else {
        return 'computer'
    }
}

function play (playerSelection, computerSelection) {
    let result = checkWinner(playerSelection, computerSelection)
    if (result === 'tie') {
        return "It's a tie!"
    } else if (result === 'player') {
        return `Player wins ${playerSelection} beats ${computerSelection}`
    } else {
        return `Computer wins! ${computerSelection} beats ${playerSelection} `
    }
}

function game() {
    for (i = 0; i < 5; i++) {
    let playerSelection = 'rock'
    let computerSelection = getComputerChoice()
    console.log(play(playerSelection, computerSelection))
}
}

game()