let choices = document.querySelectorAll(".choice");
let draw = 0;
let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");

choices.forEach((el) => {
  el.addEventListener("click", () => {
    let userChoice = el.getAttribute("id");
    playGame(userChoice);
  });
});
let playGame = (userChoice) => {
  let compChoice = getCompChoice();
  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      if (compChoice == "paper") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else if (userChoice == "paper") {
      if (compChoice == "scissors") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else {
      if (compChoice == "rock") {
        userWin = false;
      } else {
        userWin = true;
      }
    }
    showWinner(userChoice, userWin, compChoice);
  }
};

let getCompChoice = () => {
  let options = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
};

let drawGame = () => {
  draw++;
  document.querySelector("#draw").innerText = draw;
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

let showWinner = (userChoice, userWin, compChoice) => {
  if (userWin) {
    userScore++;
    document.querySelector("#user-score").innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    document.querySelector("#comp-score").innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
