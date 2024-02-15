//generate random numbr

let randomNumber = Math.floor(Math.random() * 100) + 1;

//get all changing elements from DOM

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

//amount of guesses
let guessCount = 1;

// to reset game
let resetButton;



function checkGuess() {
    alert("I am a placeholder");
  }
  checkGuess();
  