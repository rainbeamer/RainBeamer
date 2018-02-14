var userWins = "You win!";
var computerWins = "The computer wins!";
var roundCounter = 0;
var gameRound = function() {
var userChoice = prompt("Choose Rock, Paper, or Scissor by typing 'R', 'P', or 'S'");
// if (userChoice == "") {
//   userChoice="invalid";
// } else if (userChoice !=="R" || userChoice !=="S" || userChoice !=="P") {
//   userChoice="invalid";
// }
//
// }
// while ((userChoice == "") || (userChoice !=="R") || (userChoice !== "P") || (userChoice !== "S")) {
//   userChoice = prompt("Please choose a valid response. Choose Rock, Paper, or Scissor by typing 'R', 'P', or 'S'");
// }
var rng = Math.random();
var computerChoice = "R";


  if (rng > 0.66) {
  computerChoice = "P";

} else if (rng > 0.33) {
  computerChoice = "S";
}



if(computerChoice !== userChoice) {
  if (computerChoice === "R") {
    if (userChoice === "S") {
      alert(computerWins);

    } else {
      alert(userWins);
    }
  } else if (computerChoice === "P") {
    if(userChoice === "R") {
      alert(computerWins);
    } else {
      alert(userWins);
    }
  } else {
    if(userChoice === "P") {
      alert(computerWins);
    } else {
      alert(userWins);
    }
  }
} else {
  alert('Tie');
}
};
while (roundCounter < 5) {
  gameRound();
  roundCounter++
}
