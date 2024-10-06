let randNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number');
        userInput.value = '';
    } else if(guess < 1) {
        alert('Please enter a valid number greater than 0');
        userInput.value = '';
    } else if(guess > 100) {
        alert('Please enter a valid number lesser than 100');
        userInput.value = '';
    } else {
        prevGuess.push(guess);
        if(numGuess === 4) {
            cleanUpGuess(guess);
            displayMessage(`GAME OVER. Random Number was ${randNum}`)
            endGame();
        } else {
            cleanUpGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randNum) {
        displayMessage(`You guessed it right`);
        endGame();
    } else if(guess < randNum) {
        displayMessage(`Number is low`);
    } else {
        displayMessage(`Number is high`);
    }
}

function cleanUpGuess(guess) {
    userInput.value = '';  //making guess box null for entering other number
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${5 - numGuess}`;
}

function displayMessage(msg) {
    lowOrHi.innerHTML = `<h2>${msg} </h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h1 id ="newGame">Click for Start New Game</h1>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randNum = parseInt(Math.random() * 100 + 1 );
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        userInput.removeAttribute('disabled')
        StartOver.removeChild(p)
        remaining.innerHTML = `${5 - numGuess}`;
        playGame = true;
        
    })
}

