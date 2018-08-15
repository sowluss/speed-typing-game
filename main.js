window.addEventListener('load', init);

// global variables

let time =  5;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'reserve',
    'produce',
    'number',
    'crutch',
    'profession',
    'hand',
    'duty',
    'endure',
    'layer',
    'sensitive',
    'mark',
    'resolution',
    'gutter',
    'loose',
    'cup',
    'descent',
    'shave',
    'afford',
    'detail',
    'vegetation',
    'turkey',
    'concentrate',
    'cunning',
    'compromise',
    'harsh',
    'church',
    'aloof',
    'patch',
    'pleasant',
    'account'
];

// initialze game
function init(){
    // load a word from array
    showWord(words);
    // start matching on word input
    wordInput.addEventListener('input', startMatch);
    // call countdown every second
    setInterval(countdown, 1000);
    // check game status
    setInterval(checkStatus, 50);
}

// start match
function startMatch() {
    if(matchWords()) {
        isPlaying =  true;
        time = 6;
    }
}
// match the current word to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!";
        return true; 
    } else {
         message.innerHTML = '';
         return false;
    }
}

// pick and show random word
function showWord(words) {
    //  generate random array index
    const randIndex = Math.floor(Math.random() * words.length);
    //  ooutput random word
     currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
    // check that time is not running out
    if(time > 0) {
        //   decrement
        time--;
    } else if(time === 0) {
        // game is over
        isPlaying = false;
    }
    // show time
    timeDisplay.innerHTML = time;
}

// check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!';
    }
}