let randNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuess = [];
let numOfGuesses = 1;
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
    console.log(numOfGuesses)
    if (numOfGuesses >= 10) {
      displayInput(input);
      showMessage(`Game Over! The number was ${randNum} xD.`);
      endGame();
    } else {
      displayInput(input);
      checkInput(input);
    }
  }
}

function checkInput(input) {
  if (input > randNum) {
    showMessage(`Number is High!`);
  } else if (input < randNum) {
    showMessage(`Number is low!`);
  } else if (input === randNum) {
    showMessage(`Correct Guess!`);
    endGame();
  }
}

function displayInput(input) {
  userInput.value = "";
  guessSlot.innerHTML += `${input}  `;
  numOfGuesses++;
  remaining.innerHTML = `${10 - numOfGuesses}`;
}

function showMessage(msg) {
  lowOrHi.innerHTML = `<h3>${msg}<\h3>`;
}

function endGame() {
  
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const btn = document.querySelector("#newGame");
  btn.addEventListener("click", (e) => {
    randNum = parseInt(Math.random() * 100 + 1);
    previousGuess = [];
    numOfGuesses = 0;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${10 - numOfGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
