const options = ['rock', 'paper', 'scissors']

function getComputerChoice() {
  let randomIndex =  Math.floor(Math.random() * options.length)
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


