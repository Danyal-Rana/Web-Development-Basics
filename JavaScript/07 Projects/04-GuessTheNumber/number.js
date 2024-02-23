const randomNumber = parseInt(Math.random() * 100 + 1);

const submitButton = document.querySelector('#subt');
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guessses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;
let playGame = true;

function isValid (guess) {

}

function checkGuess (guess) {

}

function displayMessage (guess) {

}