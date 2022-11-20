let playerSelection, computerSelection, yourScore, computerScore;

function getComputerChoice() {

    let computerAnswer = Math.floor(Math.random() * 3);
    if (computerAnswer == 0) {
        return "rock";
    } else if (computerAnswer == 1) {
        return "paper";
    } else return "scissors";
    }

function playRound(playerSelection, computerSelection) {

    playerSelection = "rock";
    computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection) {
        return 0;

    } else if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        yourScore += 1;
        
    } else if (playerSelection == 'scissors' && computerSelection == 'rock' || playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
    }
}

function game() {

    yourScore = 0;
    computerScore = 0;

    for (let round = 1; round < 6; round++) {

        playRound(playerSelection, computerSelection);
        console.log(round);
        
        if (playRound() === 1) {
            yourScore += 1;
            return yourScore;
        } else if (playRound() === -1) {
            computerScore += 1;
            return computerScore;
        }
        
        let gameStr = "Your Hand: " + playerSelection + "\nComputer Hand: " + computerSelection + " \nYour Score: " + yourScore + " \nComputer Score: " + computerScore;
        console.log(gameStr);
    }
        }
    
    game();