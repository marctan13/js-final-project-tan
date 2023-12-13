let target;

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

//round difference
let playerOneDifference = 0;
let playerTwoDifference = 0;
let playerThreeDifference = 0;
let playerFourDifference = 0;
let playerFiveDifference = 0;
let playerSixDifference = 0;
let computerDifference = 0;

//player summary
let playerOneSummary = document.getElementById("p1-summary");
let playerTwoSummary = document.getElementById("p2-summary");
let playerThreeSummary = document.getElementById("p3-summary");
let playerFourSummary = document.getElementById("p4-summary");
let playerFiveSummary = document.getElementById("p5-summary");
let playerSixSummary = document.getElementById("p6-summary");
let computerSummary = document.getElementById("cpu-summary");

//score difference
let difference = document.getElementsByClassName("difference")
let playerOneDifferenceDisplay = document.getElementById("player1-difference");
let playerTwoDifferenceDisplay = document.getElementById("player2-difference");
let playerThreeDifferenceDisplay = document.getElementById("player3-difference");
let playerFourDifferenceDisplay = document.getElementById("player4-difference");
let playerFiveDifferenceDisplay = document.getElementById("player5-difference");
let playerSixDifferenceDisplay = document.getElementById("player6-difference");
let computerDifferenceDisplay = document.getElementById("computer-difference");

//cumulative difference
let playerOneCumulativeDifference = document.getElementById("cumu-difference-1");
let playerTwoCumulativeDifference = document.getElementById("cumu-difference-2");
let playerThreeCumulativeDifference = document.getElementById("cumu-difference-3");
let playerFourCumulativeDifference = document.getElementById("cumu-difference-4");
let playerFiveCumulativeDifference = document.getElementById("cumu-difference-5");
let playerSixCumulativeDifference = document.getElementById("cumu-difference-6");
let computerCumulativeDifference = document.getElementById("cumu-difference-computer");

let diffSummary = document.getElementsByClassName("diff-summary");
let totalDifference = document.getElementsByClassName("total-difference");

//round count
let currentRoundNumber = 1;

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

  //get difference of player one 
  const playerOneDifference = Math.abs(currentPlayerOneGuess - target);

  //Difference
  let guess = [{
    player:"one",
    difference: playerOneDifference
  }]

  //if the player card is active, their inputs will be pushed to the declared array above
  if(secondPlayer.style.display === "block"){
    playerTwoDifference = Math.abs(currentPlayerTwoGuess - target);
    guess.push({player: "two", difference: playerTwoDifference})
  }
  if(thirdPlayer.style.display === "block"){
    playerThreeDifference = Math.abs(currentPlayerThreeGuess - target);
    guess.push({player: "three", difference: playerThreeDifference})
  }
  if(fourthPlayer.style.display === "block"){
    playerFourDifference = Math.abs(currentPlayerFourGuess - target);
    guess.push({player: "four", difference: playerFourDifference})
  }
  if(fifthPlayer.style.display === "block"){
    playerFiveDifference = Math.abs(currentPlayerFiveGuess - target);
    guess.push({player: "five", difference: playerFiveDifference})
  }
  if(sixthPlayer.style.display === "block"){
    playerSixDifference = Math.abs(currentPlayerSixGuess - target);
    guess.push({player: "six", difference: playerSixDifference})
  }
  if(computerPlayer.style.display === "block"){
    computerDifference = Math.abs(computerGuess - target);
    guess.push({player: "computer", difference: computerDifference})
  }


  /*
  const computerDifference = Math.abs(computerGuess - target);
  const playerTwoDifference = Math.abs(currentPlayerTwoGuess - target);
  const playerThreeDifference = Math.abs(currentPlayerThreeGuess - target);
  const playerFourDifference = Math.abs(currentPlayerFourGuess - target);
  const playerFiveDifference = Math.abs(currentPlayerFiveGuess - target);
  const playerSixDifference = Math.abs(currentPlayerSixGuess - target);


  const guess = [
    {
      player: "one",
      difference: playerOneDifference,
    },
    {
      player: "two",
      difference: playerTwoDifference,
    },
    {
      player: "three",
      difference: playerThreeDifference,
    },
    {
      player: "four",
      difference: playerFourDifference,
    },
    {
      player: "five",
      difference: playerFiveDifference,
    },
    {
      player: "six",
      difference: playerSixDifference,
    },
    {
      player: "computer",
      difference: computerDifference,
    }
  ];
*/

  //source to get lowest value in object 
  //https://javascript.plainenglish.io/how-to-get-min-or-max-value-of-a-property-in-a-javascript-array-of-objects-3fdf318f2019
  //get lowest value in object
  /*
  const min = Math.min(...guess.map((value) => value.difference));
  const winner = Object.keys(Math.min(...guess.map((value) => value.difference)));
  console.log("Minimum number: " + min);
  console.log("Winner is: " + winner);
  */
  console.log(guess);
 

//https://www.educative.io/answers/how-to-find-an-object-by-id-in-an-array-of-javascript-objects
//used find method instead to get the key with the lowest value
const object = guess.find(obj => obj.difference === Math.min(...guess.map((value) => value.difference)));
//winning player of the round
let winner = object.player
console.log("Winner is: Player " + winner);


updateScore(winner);

//assigning the value of 0 to the elements
playerOneScoreDisplay.innerText = playerOneScore;
playerTwoScoreDisplay.innerText = playerTwoScore;
playerThreeScoreDisplay.innerText = playerThreeScore;
playerFourScoreDisplay.innerText = playerFourScore;
playerFiveScoreDisplay.innerText = playerFiveScore;
playerSixScoreDisplay.innerText = playerSixScore;
computerScoreDisplay.innerText = computerScore;

//adding cumulative difference throughout each rounds
playerOneTotalDifference = playerOneTotalDifference + playerOneDifference
playerTwoTotalDifference = playerTwoTotalDifference + playerTwoDifference
playerThreeTotalDifference = playerThreeTotalDifference + playerThreeDifference
playerFourTotalDifference = playerFourTotalDifference + playerFourDifference
playerFiveTotalDifference = playerFiveTotalDifference + playerFiveDifference
playerSixTotalDifference = playerSixTotalDifference + playerSixDifference
computerTotalDifference = computerTotalDifference + computerDifference

playerOneCumulativeDifference.innerText = playerOneTotalDifference
playerTwoCumulativeDifference.innerText = playerTwoTotalDifference
playerThreeCumulativeDifference.innerText = playerThreeTotalDifference
playerFourCumulativeDifference.innerText = playerFourTotalDifference
playerFiveCumulativeDifference.innerText = playerFiveTotalDifference
playerSixCumulativeDifference.innerText = playerSixTotalDifference
computerCumulativeDifference.innerText = computerTotalDifference



  // Display the computer guess and the target
  computerGuessDisplay.innerText = computerGuess;
  targetNumberDisplay.innerText = target;

  //display difference from the target
  playerOneDifferenceDisplay.innerText =
    "Difference is: " + playerOneDifference;
  computerDifferenceDisplay.innerText = 
  "Difference is: " + computerDifference;
  playerTwoDifferenceDisplay.innerText =
    "Difference is: " + playerTwoDifference;
  playerThreeDifferenceDisplay.innerText =
    "Difference is: " + playerThreeDifference;
  playerFourDifferenceDisplay.innerText =
    "Difference is: " + playerFourDifference;
  playerFiveDifferenceDisplay.innerText =
    "Difference is: " + playerFiveDifference;
  playerSixDifferenceDisplay.innerText =
    "Difference is: " + playerSixDifference;

    showInput();

    //switch the disabled state of the two buttons alternatively
    guessButton.setAttribute('disabled', true)
    nextRoundButton.removeAttribute('disabled');
}
);
//end of event listener

//next round button event listener
nextRoundButton.addEventListener('click', () =>{
  //increase round number
  advanceRound();
  hideInput();
  //display the new round number
  roundNumberDisplay.innerText = currentRoundNumber;

  //set correct disabled state for the buttons
  nextRoundButton.setAttribute('disabled', true);
  guessButton.removeAttribute('disabled');

  //reset the guess input box and the target number display
  computerGuessDisplay.innerText = '?';
  computerWinnerDisplay.innerText = '';
  targetNumberDisplay.innerText = '?';
  //for loop to iterate through array of classes to reset value
  for(let i=0; i < winnerDisplay.length; i++){
    winnerDisplay[i].innerHTML = '';
  }
  for(let i=0; i < differenceDisplay.length; i++){
    differenceDisplay[i].innerHTML = '';
  }
  for(let i=0; i < guessInput.length; i++){
    guessInput[i].value = '';
  }
}
)