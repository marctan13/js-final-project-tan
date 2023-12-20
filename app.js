let target;

class Player {
  constructor(player, input) {
    this.player = player;
    this.input = input;
  }

  getDifference() {
    return Math.abs(target - this.input);
  }

  differenceDisplay() {
    return "The difference is " + Math.abs(target - this.input);
  }
}

//submit and next round button
const guessButton = document.getElementById("guess");
const nextRoundButton = document.getElementById("next-round");

//user and cpu guess input
let playerOneGuessInput = document.getElementById("player1-guess");
let playerTwoGuessInput = document.getElementById("player2-guess");
let playerThreeGuessInput = document.getElementById("player3-guess");
let playerFourGuessInput = document.getElementById("player4-guess");
let playerFiveGuessInput = document.getElementById("player5-guess");
let playerSixGuessInput = document.getElementById("player6-guess");
let computerGuessDisplay = document.getElementById("computer-guess");
let guessInput = document.getElementsByClassName("guess");

//round display
let roundNumberDisplay = document.getElementById("round-number");
let targetNumberDisplay = document.getElementById("target-number");

//score displays
let playerOneScoreDisplay = document.getElementById("player1-score");
let playerTwoScoreDisplay = document.getElementById("player2-score");
let playerThreeScoreDisplay = document.getElementById("player3-score");
let playerFourScoreDisplay = document.getElementById("player4-score");
let playerFiveScoreDisplay = document.getElementById("player5-score");
let playerSixScoreDisplay = document.getElementById("player6-score");
let computerScoreDisplay = document.getElementById("computer-score");

//winner display
let playerOneWinnerDisplay = document.getElementById("winner-one");
let playerTwoWinnerDisplay = document.getElementById("winner-two");
let playerThreeWinnerDisplay = document.getElementById("winner-three");
let playerFourWinnerDisplay = document.getElementById("winner-four");
let playerFiveWinnerDisplay = document.getElementById("winner-five");
let playerSixWinnerDisplay = document.getElementById("winner-six");
let computerWinnerDisplay = document.getElementById("winner-computer");
let differenceDisplay = document.getElementsByClassName("difference");
let winnerDisplay = document.getElementsByClassName("winner");


//player summary
let playerOneSummary = document.getElementById("p1-summary");
let playerTwoSummary = document.getElementById("p2-summary");
let playerThreeSummary = document.getElementById("p3-summary");
let playerFourSummary = document.getElementById("p4-summary");
let playerFiveSummary = document.getElementById("p5-summary");
let playerSixSummary = document.getElementById("p6-summary");
let computerSummary = document.getElementById("cpu-summary");

//score difference
let difference = document.getElementsByClassName("difference");

let diffSummary = document.getElementsByClassName("diff-summary");
let totalDifference = document.getElementsByClassName("total-difference");

//round count
let currentRoundNumber = 1;


//events to reflect name change on name fields
document.getElementById("p1-name").addEventListener("keyup", getName);
document.getElementById("p2-name").addEventListener("keyup", getName);
document.getElementById("p3-name").addEventListener("keyup", getName);
document.getElementById("p4-name").addEventListener("keyup", getName);
document.getElementById("p5-name").addEventListener("keyup", getName);
document.getElementById("p6-name").addEventListener("keyup", getName);

//submit event
guessButton.addEventListener("click", () => {
  checkInput();
  // Generate the target value
  target = generateTarget();
  // Retrieve the player's guess
  const currentPlayerOneGuess = playerOneGuessInput.value;
  const currentPlayerTwoGuess = playerTwoGuessInput.value;
  const currentPlayerThreeGuess = playerThreeGuessInput.value;
  const currentPlayerFourGuess = playerFourGuessInput.value;
  const currentPlayerFiveGuess = playerFiveGuessInput.value;
  const currentPlayerSixGuess = playerSixGuessInput.value;

  // Make a random 'computer guess'
  const computerGuess = Math.floor(Math.random() * 101);
  const computer = new Player("computer", computerGuess);

  const playerOne = new Player("one", playerOneGuessInput.value);
  const playerTwo = new Player("two", playerTwoGuessInput.value);
  const playerThree = new Player("three", playerThreeGuessInput.value);
  const playerFour = new Player("four", playerFourGuessInput.value);
  const playerFive = new Player("five", playerFiveGuessInput.value);
  const playerSix = new Player("six", playerSixGuessInput.value);
  // const computer = new Player("computer", computerGuess);

  //INPUT ROUND DIFFERENCE TO TABLE
  // let playerOneRoundDIfference = document.getElementById(
  //   "player1-difference-table"
  // );
  // playerOneRoundDIfference.innerText = playerOne.getDifference();

  //add rows to table depending on players
  // function twoRow() {
  //   var table = document.getElementById("diff-table");
  //   var tr = document.createElement("tr");
  //   var th = document.createElement("th");
  //   var td = document.createElement("td");
  //   td.innerText = playerTwo.getDifference();
  //   th.innerText = "Player 2";
  //   tr.appendChild(th);
  //   tr.appendChild(td);
  //   table.appendChild(tr);
  // }

  // function ThreeRow() {
  //   twoRow();
  // }

  let guess = [
    {
      player: "one",
      difference: playerOne.getDifference(),
    },
  ];
  if (secondPlayer.style.display === "block") {
    guess.push({ player: "two", difference: playerTwo.getDifference() });
    //twoRow();
  }
  if (thirdPlayer.style.display === "block") {
    guess.push({ player: "three", difference: playerThree.getDifference() });
  }

  if (fourthPlayer.style.display === "block") {
    guess.push({ player: "four", difference: playerFour.getDifference() });
  }
  if (fifthPlayer.style.display === "block") {
    guess.push({ player: "five", difference: playerFive.getDifference() });
  }
  if (sixthPlayer.style.display === "block") {
    guess.push({ player: "six", difference: playerSix.getDifference() });
  }
  if (computerPlayer.style.display === "block") {
    guess.push({ player: "computer", difference: computer.getDifference() });
  }

  console.log(guess);

  //https://www.educative.io/answers/how-to-find-an-object-by-id-in-an-array-of-javascript-objects
  //used find method instead to get the key with the lowest value
  //find first winner
  const object = guess.find(
    (obj) =>
      obj.difference === Math.min(...guess.map((value) => value.difference))
  );

  //get other winners with same min difference
  const winners = guess.filter((value) => object.difference === value.difference);
  const otherWinnerScore = winners.splice(1);
  let otherWinners = [];
  otherWinnerScore.forEach((element) => otherWinners.push(element.player));
  console.log("Other winner: " + otherWinners);
  //loop through array of other winners
  for (let i = 0; i < otherWinners.length; i++) {
    if (otherWinners[i] === "two") {
      playerTwoWinnerDisplay.innerHTML = "You win!";
      playerTwoScore++;
    }
    if (otherWinners[i] === "three") {
      playerThreeWinnerDisplay.innerHTML = "You win!";
      playerThreeScore++;
    }
    if (otherWinners[i] === "four") {
      playerFourWinnerDisplay.innerHTML = "You win!";
      playerFourScore++;
    }
    if (otherWinners[i] === "five") {
      playerFiveWinnerDisplay.innerHTML = "You win!";
      playerFiveScore++;
    }
    if (otherWinners[i] === "six") {
      playerSixWinnerDisplay.innerHTML = "You win!";
      playerSixScore++;
    }
    if (otherWinners[i] === "computer") {
      computerWinnerDisplay.innerHTML = "You win!";
      computerScore++;
    }
  }

  //console.log(object);
  //winning player/s of the round
  let winner = object.player;

  updateScore(winner);

  //assigning the score value to the elements
  playerOneScoreDisplay.innerText = playerOneScore;
  playerTwoScoreDisplay.innerText = playerTwoScore;
  playerThreeScoreDisplay.innerText = playerThreeScore;
  playerFourScoreDisplay.innerText = playerFourScore;
  playerFiveScoreDisplay.innerText = playerFiveScore;
  playerSixScoreDisplay.innerText = playerSixScore;
  computerScoreDisplay.innerText = computerScore;

  //adding cumulative difference throughout each rounds
  playerOneTotalDifference =
    playerOneTotalDifference + playerOne.getDifference();
  playerTwoTotalDifference =
    playerTwoTotalDifference + playerTwo.getDifference();
  playerThreeTotalDifference =
    playerThreeTotalDifference + playerThree.getDifference();
  playerFourTotalDifference =
    playerFourTotalDifference + playerFour.getDifference();
  playerFiveTotalDifference =
    playerFiveTotalDifference + playerFive.getDifference();
  playerSixTotalDifference =
    playerSixTotalDifference + playerSix.getDifference();
  computerTotalDifference = computerTotalDifference + computer.getDifference();

  document.getElementById("cumu-difference-1").innerText =
    playerOneTotalDifference;
  document.getElementById("cumu-difference-2").innerText =
    playerTwoTotalDifference;
  document.getElementById("cumu-difference-3").innerText =
    playerThreeTotalDifference;
  document.getElementById("cumu-difference-4").innerText =
    playerFourTotalDifference;
  document.getElementById("cumu-difference-5").innerText =
    playerFiveTotalDifference;
  document.getElementById("cumu-difference-6").innerText =
    playerSixTotalDifference;
  document.getElementById("cumu-difference-computer").innerText =
    computerTotalDifference;

  // Display the computer guess and the target
  computerGuessDisplay.innerText = computerGuess;
  targetNumberDisplay.innerText = target;

  //display difference from the target
  document.getElementById("player1-difference").innerText =
    playerOne.differenceDisplay();
  document.getElementById("computer-difference").innerText =
    computer.differenceDisplay();
  document.getElementById("player2-difference").innerText =
    playerTwo.differenceDisplay();
  document.getElementById("player3-difference").innerText =
    playerThree.differenceDisplay();
  document.getElementById("player4-difference").innerText =
    playerFour.differenceDisplay();
  document.getElementById("player5-difference").innerText =
    playerFive.differenceDisplay();
  document.getElementById("player6-difference").innerText =
    playerSix.differenceDisplay();

  showInput();

  //switch the disabled state of the two buttons alternatively
  guessButton.setAttribute("disabled", true);
  nextRoundButton.removeAttribute("disabled");
});
//end of event listener

//next round button event listener
nextRoundButton.addEventListener("click", () => {
  //increase round number
  advanceRound();
  hideInput();
  //display the new round number
  roundNumberDisplay.innerText = currentRoundNumber;

  //set correct disabled state for the buttons
  nextRoundButton.setAttribute("disabled", true);
  guessButton.removeAttribute("disabled");

  //reset the guess input box and the target number display
  computerGuessDisplay.innerText = "?";
  computerWinnerDisplay.innerText = "";
  targetNumberDisplay.innerText = "?";
  //for loop to iterate through array of classes to reset value
  for (let i = 0; i < winnerDisplay.length; i++) {
    winnerDisplay[i].innerHTML = "";
  }
  for (let i = 0; i < differenceDisplay.length; i++) {
    differenceDisplay[i].innerHTML = "";
  }
  for (let i = 0; i < guessInput.length; i++) {
    guessInput[i].value = "";
  }
});
