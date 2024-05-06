let result = "";
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  Ties: 0,
};

document.querySelector(".js-result").innerText = `${result}`;

updateScoreElement();

/*
    if (score === null) {
      score = {
        wins: 0,
        losses: 0,
        Ties: 0
      };
    }*/

function playGame(playermove) {
  let computerMove = pickComputerMove();

  if (playermove === "Scissor") {
    if (computerMove === "Rock") {
      result = "You lost.";
    } else if (computerMove === "Paper") {
      result = "You win.";
    } else if (computerMove === "Scissor") {
      result = "Tie.";
    }
  } else if (playermove === "Paper") {
    if (computerMove === "Rock") {
      result = "You win.";
    } else if (computerMove === "Paper") {
      result = "Tie.";
    } else if (computerMove === "Scissor") {
      result = "You lost.";
    }
  } else if (playermove === "Rock") {
    if (computerMove === "Rock") {
      result = "Tie.";
    } else if (computerMove === "Paper") {
      result = "You lost.";
    } else if (computerMove === "Scissor") {
      result = "You win.";
    }
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lost.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.Ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  console.log(score);

  document.querySelector(".js-result").innerText = `${result}`;

  document.querySelector(".js-moves").innerHTML = `You
    <img class="move-icon" src="${playermove}-emoji.png" class="move-icon" alt="">.

    <img class="move-icon" src="${computerMove}-emoji.png"class="move-icon" alt="">

    computer`;

  updateScoreElement();

  alert(
    `You picked up ${playermove}. computer picked up ${computerMove}. So ${result}`
  );
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Win :${score.wins}, Loses :${score.losses}, Ties :${score.Ties}`;
}
function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "Scissor";
  }
  console.log(computerMove);
  return computerMove;
}
