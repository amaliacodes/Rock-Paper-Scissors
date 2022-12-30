window.onload = function() {
let yourScore = 0;
let computerScore = 0;

//get the computer's hand//
function getComputerChoice() {
    const computerAnswer = Math.floor(Math.random() * 3);
    if (computerAnswer == 0) {
        return "rock";
    } else if (computerAnswer == 1) {
        return "paper";
    } else return "scissors";
};

// decide who wins the round. 1 if player wins, -1 if computer wins, 0 if draw//
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();

    let gameStr = "Your Hand: " + playerSelection + "\nComputer Hand: " + computerSelection;
    console.log(gameStr);
    
    if (
        (playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') 
    ){
        console.log("You Win this round!");
        return 1;
    } else if (
        (playerSelection == 'scissors' && computerSelection == 'rock') || 
        (playerSelection == 'rock' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'scissors')
     ) {
        console.log("Computer Wins this round!");
        return -1;
    } else {
        console.log("This round is a draw!");
        return 0;
}};

function newGame() {

    yourScore = 0;
    computerScore = 0;
    round = 0;

    document.getElementById('roundname').textContent = "Round " + round;

    document.getElementById("output").addEventListener("click", function(event) {
        if (event.target.classList.contains("choice-button")) {
          let playerSelection = event.target.textContent.toLowerCase();
    let result = parseInt(playRound(playerSelection));

        if (result == 1) {
            yourScore += 1;
        } else if (result == -1) {
            computerScore += 1;
        }

        let gameScore = 
        "Your Score: " + yourScore + " \nComputer Score: " + computerScore;
        console.log(gameScore);

        document.getElementById('score').textContent = "Your Score: " + yourScore + " | Computer Score: " + computerScore;
        round++
        document.getElementById('roundname').textContent = "Round " + round;

        if (yourScore >= 5 || computerScore >= 5) {
            if (yourScore > computerScore) {
        console.log("WINNER!");
        document.getElementById('game-result').textContent = "You won the game!";
    } else if (computerScore > yourScore) {
        console.log("LOSER!");
        document.getElementById('game-result').textContent = "You lost the game!";
    } else {
        console.log("DRAW!");
        document.getElementById('game-result').textContent = "The game ended in a draw.";
    }}}
})}

newGame()

}