let playerSelection = prompt("Rock, Paper, or Scissors?");

function getComputerChoice() {

    let computerAnswer = Math.floor(Math.random() * 3);
    if (computerAnswer == 0) {
        console.log("rock");
        return "rock";
    } else if (computerAnswer == 1) {
        console.log("paper");
        return "paper";
    } else {
        console.log("scissors");
        return "scissors";
    }
    }

    function playRound(playerSelection, computerSelection) {
        
        playerSelection = playerSelection.toLowerCase();

        if (playerSelection == computerSelection) {
            return "It's a Tie!";

        } else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
            return "Congrats! You Win!";

        } else if (playerSelection == 'scissors' && computerSelection == 'rock' ||
        playerSelection == 'rock' && computerSelection == 'paper' ||
        playerSelection == 'paper' && computerSelection == 'scissors') {
            return "Too Bad! You Lose!";
        }
    }

    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    function game() {
        for (let i = 0; i < 5; i++) {
            if (playRound() == "Congrats! You Win!");
            console.log(i);
        }
    }

