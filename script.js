//buttons for how many players
let twoPlayer = document.getElementById("two-player");
let threePlayer = document.getElementById("three-player");
let fourPlayer = document.getElementById("four-player");
let fivePlayer = document.getElementById("five-player");
let sixPlayer = document.getElementById("six-player");

//initialize scores
let playerOneScore = 0;
let playerTwoScore = 0;
let playerThreeScore = 0;
let playerFourScore = 0;
let playerFiveScore = 0;
let playerSixScore = 0;
let computerScore = 0;

//total difference 
let playerOneTotalDifference = 0;
let playerTwoTotalDifference = 0;
let playerThreeTotalDifference = 0;
let playerFourTotalDifference = 0;
let playerFiveTotalDifference = 0;
let playerSixTotalDifference = 0;
let computerTotalDifference = 0;

//player card
let firstPlayer = document.getElementById("p1");
let computerPlayer = document.getElementById("cpu");
let secondPlayer = document.getElementById("p2");
let thirdPlayer = document.getElementById("p3");
let fourthPlayer = document.getElementById("p4");
let fifthPlayer = document.getElementById("p5");
let sixthPlayer = document.getElementById("p6");


function getName() {
var playerOneName = document.getElementById("p1-name").value;
document.getElementById("p1-summary-name").innerText = playerOneName;
//table name
//document.getElementById("p1-table-name").innerText = playerOneName;
var playerTwoName = document.getElementById("p2-name").value;
document.getElementById("p2-summary-name").innerText = playerTwoName;
//document.getElementById("p2-table-name").innerText = playerTwoName;
var playerThreeName = document.getElementById("p3-name").value;
document.getElementById("p3-summary-name").innerText = playerThreeName;
//document.getElementById("p3-table-name").innerText = playerThreeName;
var playerFourName = document.getElementById("p4-name").value;
document.getElementById("p4-summary-name").innerText = playerFourName;
//document.getElementById("p4-table-name").innerText = playerFourName;
var playerFiveName = document.getElementById("p5-name").value;
document.getElementById("p5-summary-name").innerText = playerFiveName;
//document.getElementById("p5-table-name").innerText = playerFiveName;
var playerSixName = document.getElementById("p6-name").value;
document.getElementById("p6-summary-name").innerText = playerSixName;
//document.getElementById("p6-table-name").innerText = playerSixName;
}

//reset UI
const resetUI = () => {
roundNumberDisplay.innerText = 1;
currentRoundNumber = 1;
for(let i=0; i < difference.length; i++){
  difference[i].innerHTML = '';
}
for(let i=0; i < guessInput.length; i++){
  guessInput[i].value = '';
}
for(let i=0; i < winnerDisplay.length; i++){
  winnerDisplay[i].innerHTML = '';
}
roundNumberDisplay.innerText = 1;
playerOneScore = 0;
playerOneScoreDisplay.innerText = playerOneScore
playerTwoScore = 0;
playerTwoScoreDisplay.innerText = playerTwoScore;
playerThreeScore = 0;
playerThreeScoreDisplay.innerText = playerThreeScore;
playerFourScore = 0;
playerFourScoreDisplay.innerText = playerFourScore;
playerFiveScore = 0;
playerFiveScoreDisplay.innerText = playerFiveScore;
playerSixScore = 0;
playerSixScoreDisplay.innerText = playerSixScore;
computerScore = 0;
computerScoreDisplay.innerText = computerScore;
document.getElementById("target-number").innerText = "?";
document.getElementById("computer-guess").innerText = "?";
playerThreeTotalDifference = 0;
playerFourTotalDifference = 0;
playerFiveTotalDifference = 0;
playerSixTotalDifference = 0;
computerTotalDifference = 0;
nextRoundButton.setAttribute('disabled', true);
guessButton.removeAttribute('disabled');
hideInput();
};

//show player 2
const showTwo = () => {
  resetUI();
  secondPlayer.style.display = "block";
  computerPlayer.style.display = "none";
  thirdPlayer.style.display = "none";
  fourthPlayer.style.display = "none";
  fifthPlayer.style.display = "none";
  sixthPlayer.style.display = "none";
  playerTwoSummary.style.display = "block";
  computerSummary.style.display = "none";
  playerThreeSummary.style.display = "none";
  playerFourSummary.style.display = "none";
  playerFiveSummary.style.display = "none";
  playerSixSummary.style.display = "none";
  for(let i=0; i < totalDifference.length; i++){
    totalDifference[i].innerHTML = 0;
  }
  playerOneTotalDifference = 0;
  playerTwoTotalDifference = 0;
  return true;
};

//vs cpu
const showCPU = () =>{
  resetUI();
  computerPlayer.style.display = "block";
  secondPlayer.style.display = "none";
  thirdPlayer.style.display = "none";
  fourthPlayer.style.display = "none";
  fifthPlayer.style.display = "none";
  sixthPlayer.style.display = "none";
  computerSummary.style.display = "block";
  playerTwoSummary.style.display = "none";
  playerThreeSummary.style.display = "none";
  playerFourSummary.style.display = "none";
  playerFiveSummary.style.display = "none";
  playerSixSummary.style.display = "none";
  for(let i=0; i < totalDifference.length; i++){
    totalDifference[i].innerHTML = 0;
  }
  playerOneTotalDifference = 0;
  computerTotalDifference = 0;
  return true;
}

//show player 2 and 3
const showThree = () => {
  showTwo();
  thirdPlayer.style.display = "block";
  playerThreeSummary.style.display = "block";
  playerThreeTotalDifference = 0;
  return true;
};

//show player 2-4
const showFour = () => {
  showThree();
  fourthPlayer.style.display = "block";
  playerFourSummary.style.display = "block";
  playerFourTotalDifference = 0;
  return true;
};

//show player 2-5
const showFive = () => {
  showFour();
  fifthPlayer.style.display = "block";
  playerFiveSummary.style.display = "block";
  playerFiveTotalDifference = 0;
  return true;
};

//show player 2-6
const showSix = () => {
  showFive();
  sixthPlayer.style.display = "block";
  playerSixSummary.style.display = "block";
  playerSixTotalDifference = 0;
  return true;
};

//generate target score up to 100
const generateTarget = () => {
  return Math.floor(Math.random() * 101);
};

//update score. determine winner
const updateScore = winner => {
  if(winner === 'one'){
  playerOneWinnerDisplay.innerHTML = "You win!";
  playerOneScore++;
  console.log("current score: " + playerOneScore);
} else if(winner === 'two'){
  playerTwoWinnerDisplay.innerHTML = "You win!";
  playerTwoScore++;
  console.log("current score: " + playerTwoScore);
} else if(winner === 'three'){
  playerThreeWinnerDisplay.innerHTML = "You win!";
  playerThreeScore++;
  console.log("current score: " + playerThreeScore);
} else if(winner === 'four'){
  playerFourWinnerDisplay.innerHTML = "You win!";
  playerFourScore++;
  console.log("current score: " + playerFourScore);
} else if(winner === 'five'){
  playerFiveWinnerDisplay.innerHTML = "You win!";
  playerFiveScore++;
  console.log("current score: " + playerFiveScore);
} else if(winner === 'six'){
  playerSixWinnerDisplay.innerHTML = "You win!";
  playerSixScore++;
  console.log("current score: " + playerSixScore);
} else{
    computerWinnerDisplay.innerHTML = "You win!";
    computerScore++;
    console.log("current score: " + computerScore);
}
}

//to move to next round
const advanceRound = () =>{
  currentRoundNumber++;
}

//source from https://stackoverflow.com/questions/18042133/check-if-input-is-number-or-letter-javascript
//how to stop the round if a user inputs wrong value???
const checkInput = () => {
  let numbers = /^0-9]+$/;
  let alphabet = /^[a-z]+$/;
  if((playerOneGuessInput.value.match(numbers) || playerOneGuessInput.value.match(alphabet))){
    window.alert("Please input a number between 1-100 Player 1");
  }
  if(playerOneGuessInput.value > 100){
    window.alert("Values over 100 is not allowed Player 1");
    // throw '';
    throw new Error("Invalid input greater than 100!")
  }
  if((playerTwoGuessInput.value.match(numbers) || playerTwoGuessInput.value.match(alphabet)) && p2.style.display === "block"){
    window.alert("Please input a number between 1-100 Player 2");
  }
  if(playerTwoGuessInput.value > 100){
    window.alert("Values over 100 is not allowed Player 2");
    throw new Error("Invalid input greater than 100!")
  }
  if((playerThreeGuessInput.value.match(numbers) || playerThreeGuessInput.value.match(alphabet))  && p3.style.display === "block"){
    window.alert("Please input a number between 1-100 Player 3");
  }
  if(playerThreeGuessInput.value > 100){
    window.alert("Values over 100 is not allowed Player 3");
    throw new Error("Invalid input greater than 100!")
  }
  if((playerFourGuessInput.value.match(numbers) || playerFourGuessInput.value.match(alphabet))  && p4.style.display === "block"){
    window.alert("Please input a number between 1-100 Player 4");
  }
  if(playerFourGuessInput.value > 100){
    window.alert("Values over 100 is not allowed Player 4");
    throw new Error("Invalid input greater than 100!")
  }
  if((playerFiveGuessInput.value.match(numbers) || playerFiveGuessInput.value.match(alphabet))  && p5.style.display === "block"){
    window.alert("Please input a number between 1-100 Player 5");
  }
  if(playerFiveGuessInput.value > 100){
    window.alert("Values over 100 is not allowed Player 5");
    throw new Error("Invalid input greater than 100!")
  }
  if((playerSixGuessInput.value.match(numbers) || playerSixGuessInput.value.match(alphabet))  && p6.style.display === "block"){
    window.alert("Please input a number between 1-100 Player 6");
  }
  if(playerSixGuessInput.value > 100){
    window.alert("Values over 100 is not allowed Player 6");
    throw new Error("Invalid input greater than 100!")
  }
}

const showInput = () => {
  for(let i=0; i < guessInput.length; i++){
    guessInput[i].type = 'number';
  }
  };

const hideInput = () => {
  for(let i=0; i < guessInput.length; i++){
    guessInput[i].type = 'password';
  }
}

//tiebreaker if there is 2 or more players with the same difference
