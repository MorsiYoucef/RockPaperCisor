getComputerChoice = function (list) {
  return Math.floor(Math.random() * list.length);
};

playerSelection = function (computer, player) {
  if (computer.toUpperCase() === player.toUpperCase()) {
    return "Equality!";
  }
  if (computer.toUpperCase() === "ROCK") {
    switch (player.toUpperCase()) {
      case "PAPER":
        return "You win!, Paper beats Rock!";
      case "SCISSORS":
        return "You lose! Rock beats Scissors!";
    }
  } else if (computer.toUpperCase() === "PAPER") {
    switch (player.toUpperCase()) {
      case "SCISSORS":
        return "You win!, Scissors beats Paper!";
      case "ROCK":
        return "You lose! Paper beats Rock!";
    }
  } else if (computer.toUpperCase() === "SCISSORS") {
    switch (player.toUpperCase()) {
      case "PAPER":
        return "You lose!, Scissors beats Paper!";
      case "ROCK":
        return "You win! Rock beats Scissors!";
    }
  }
};
Game = function () {
  const list = ["Rock", "Paper", "Scissors"];
  let Player = 0;
  let Computer = 0;
  while (Computer < 5 && Player < 5) {
    let computer = list[getComputerChoice(list)];
    let userInput = prompt("Enter Rock/Paper/Scissors:");
    let result = playerSelection(computer, userInput).slice(0, 8);
    if (result === "You win!") {
      console.log(`You win! ${(Player += 1)} and computer is ${Computer}`);
    } else if (result === "You lose") {
      console.log(`You lose! ${Player} and computer is ${(Computer += 1)}`);
    } else if (result === "Equality") {
      console.log(`Equality! ${Player} and computer is ${Computer}`);
    }
  }
  if (Computer > Player) {
    console.log(`You lose the Game! ${Player} and computer is ${Computer}`);
  } else {
    console.log(`You win the Game! ${Player} and computer is ${Computer}`);
  }
};
console.log(Game());
