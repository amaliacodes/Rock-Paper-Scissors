window.onload = function () {
  let yourScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const computerAnswer = Math.floor(Math.random() * 3);
    if (computerAnswer === 0) {
      return "rock";
    } else if (computerAnswer === 1) {
      return "paper";
    } else return "scissors";
  }

  function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();

    setTimeout(function () {
      document.getElementById("yourgamestring").innerText =
        "You chose " + playerSelection;
    }, 200);

    setTimeout(function () {
        document.getElementById("computergamestring").innerText =
          "The computer chose " + computerSelection;
      }, 400);

    // setTimeout(function () {
    //   document.getElementById("yourgamestring").innerText = "";
    // }, 3600);

    // setTimeout(function () {
    //   document.getElementById("computergamestring").innerText = "";
    // }, 3600);

    const winningText = () => {
      document.getElementById("roundresult").innerText = "You Win this round!";
    //   setTimeout(function () {
    //     document.getElementById("roundresult").innerText = "";
    //   }, 3000);
    };

    const losingText = () => {
      document.getElementById("roundresult").innerText =
        "Computer Wins this round!";
    //   setTimeout(function () {
    //     document.getElementById("roundresult").innerText = "";
    //   }, 3000);
    };

    const drawText = () => {
      document.getElementById("roundresult").innerText =
        "This round is a draw!";
    //   setTimeout(function () {
    //   document.getElementById("computergamestring").innerText =
    //     "The computer chose " + computerSelection;
    // }, 600);
    };

    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      setTimeout(winningText, 600);
      return 1;
    } else if (
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors")
    ) {
      setTimeout(losingText, 600);
      return -1;
    } else {
      setTimeout(drawText, 600);
      return 0;
    }
  }

  function newGame() {
    yourScore = 0;
    computerScore = 0;
    round = 0;

    document.getElementById("roundname").innerText = "Round: " + round;

    document
      .getElementById("output")
      .addEventListener("click", function (event) {
        if (event.target.classList.contains("choice-button")) {
          let playerSelection = event.target.innerText.toLowerCase();
          let result = parseInt(playRound(playerSelection));
          console.log(result, " result");
          if (result === 1) {
            yourScore += 1;
          } else if (result === -1) {
            computerScore += 1;
          }

          document.getElementById("score").innerText = yourScore;
          document.getElementById("score2").innerText = computerScore;
          round++;
          document.getElementById("roundname").innerText = "Round " + round;
          var popup = document.querySelector(".popup-content");
          var restart = document.querySelector(".restart");

          if (yourScore >= 5 || computerScore >= 5) {
            if (yourScore > computerScore) {
              popup.classList.toggle("active");
              document.getElementById("game-result").innerText =
                "You won the game!";
            } else if (computerScore > yourScore) {
              popup.classList.toggle("active");
              document.getElementById("game-result").innerText =
                "You lost the game!";
            }
            restart.addEventListener("click", function () {
              window.location.reload();
              popup.classList.remove("active");
            });
          }
        }
      });
  }

  newGame();
};
