const randNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastRsult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuess = [];
let numOfGuesses = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const input = parseInt(userInput.value);
    validateInput(input);
  });
}

function validateInput(input) {
  if (input === "" || isNaN(input)) {
    alert("Enter a valid number!");
  } else if (input < 1 || input > 100) {
    alert("Enter a number within given range!");
  } else {
    previousGuess.push(input);
    if (numOfGuesses >= 10){
        displayInput(input)
        showMessage(`Game Over! The number was ${randNum} xD.`)
        endGame()
    }
    else{
        displayInput(input)
        checkInput(input)
    }
  }
}

function checkInput(input) {
    if (input > randNum) {
        showMessage(`Number is High!`)
    } else if (input < randNum) {
        showMessage(`Number is low!`)
    } else if (input === randNum){
        showMessage(`Correct Guess!`)
    }
}

function displayInput(input) {}

function showMessage(msg) {}

function endGame() {}

function newGame() {}
