let yourScore;
let computerScore;

//get the computer's hand//
function getComputerChoice() {

    let computerAnswer = Math.floor(Math.random() * 3);
    if (computerAnswer == 0) {
        return "rock";
    } else if (computerAnswer == 1) {
        return "paper";
    } else return "scissors";
    }

// decide who wins the round. 1 if player wins, -1 if computer wins, 0 if draw//
function playRound(playerSelection, computerSelection) {

    playerSelection = button;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice()
    let gameStr = "Your Hand: " + playerSelection + "\nComputer Hand: " + computerSelection;
    console.log(gameStr);
    
    if (playerSelection == 'rock' && computerSelection == 'scissors' || playerSelection == 'paper' && computerSelection == 'rock' || playerSelection == 'scissors' && computerSelection == 'paper') {
        return 1;
        
    } else if (playerSelection == 'scissors' && computerSelection == 'rock' || playerSelection == 'rock' && computerSelection == 'paper' || playerSelection == 'paper' && computerSelection == 'scissors') {
        return -1;
        
    } else return 0;
}

function newGame() {

    yourScore = 0;
    computerScore = 0;

    for (let round = 1; round ; round++) {
        console.log(round);
        let result = parseInt(playRound())

        if (result == 1) {
            yourScore += 1;
        } else if (result == -1) {
            computerScore += 1;
        }

        let gameScore = "Your Score: " + yourScore + " \nComputer Score: " + computerScore;
        console.log(gameScore);
    }

    if (yourScore > computerScore) {
        console.log("WINNER!")
        return "WINNER!";
    } else if (computerScore > yourScore) {
        console.log("LOSER!")
        return "LOSER!";
    } else 
    console.log("DRAW!");
    return "DRAW!";
}
newGame()

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.textContent.toLowerCase());
    });
});
