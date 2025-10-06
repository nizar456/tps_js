let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("rock");
  updateScoreElement();
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("paper");
  updateScoreElement();
});

document.querySelector(".js-scissors-button").addEventListener("click", () => {
  playGame("scissors");
  updateScoreElement();
});

document.querySelector(".auto-play-button").addEventListener("click", () => {
  setInterval(function() {
    autoplayGame();
    updateScoreElement();
  }, 1000);
});
/*
  Add an event listener
  if the user presses the key r => play rock
  if the user presses the key p => play paper
  if the user presses the key s => play scissors
  */

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  //showSelectedElements(playerMove, computerMove);
  document.querySelector(
    ".js-moves"
  ).innerHTML = `<img src="images/${playerMove}-emoji.png" class="move-icon"> 
  <img src="images/${computerMove}-emoji.png" class="move-icon">`;
  if (playerMove == computerMove) {
    score.ties++;
  }
  if (computerMove == "rock") {
    if (playerMove == "paper") {
      score.wins++;
    }
    if (playerMove == "scissors") {
      score.losses++;
    }
  }
  if (computerMove == "paper") {
    if (playerMove == "scissors") {
      score.wins++;
    }
    if (playerMove == "rock") {
      score.losses++;
    }
  }
  if (computerMove == "scissors") {
    if (playerMove == "rock") {
      score.wins++;
    }
    if (playerMove == "paper") {
      score.losses++;
    }
  }

  let result = "";

  // calculate result
  // update the score and store it using localStorage.setItem
  // show the new score and the updated images using "document.querySelector"
}

function autoplayGame() {
  const computerMove = pickComputerMove();
  const playerMove = pickComputerMove();
  //showSelectedElements(playerMove, computerMove);
  document.querySelector(
    ".js-moves"
  ).innerHTML = `<img src="images/${playerMove}-emoji.png" class="move-icon"> 
  <img src="images/${computerMove}-emoji.png" class="move-icon">`;
  if (playerMove == computerMove) {
    score.ties++;
  }
  if (computerMove == "rock") {
    if (playerMove == "paper") {
      score.wins++;
    }
    if (playerMove == "scissors") {
      score.losses++;
    }
  }
  if (computerMove == "paper") {
    if (playerMove == "scissors") {
      score.wins++;
    }
    if (playerMove == "rock") {
      score.losses++;
    }
  }
  if (computerMove == "scissors") {
    if (playerMove == "rock") {
      score.wins++;
    }
    if (playerMove == "paper") {
      score.losses++;
    }
  }

  let result = "";

  // calculate result
  // update the score and store it using localStorage.setItem
  // show the new score and the updated images using "document.querySelector"
}

function showSelectedElements(playerMove, computerMove) {
  /*const elem1 = document.getElementById("move-icon-player");
  const elem2 = document.getElementById("move-icon-player"); 
  elem1.src = `images/${playerMove}-emoji.png`;
  elem2.src = `images/${computerMove}-emoji.png`;*/
  const elem1 = document.createElement("img");
  elem1.src = `images/${playerMove}-emoji.png`;

  const elem2 = document.createElement("img");
  elem1.src = `images/${computerMove}-emoji.png`;


  const element = document.getElementById("js-moves");
  element.appendChild(elem1);
  element.appendChild(elem2);
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}
