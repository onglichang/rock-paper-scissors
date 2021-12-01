// when page is first loaded, 0 points have been scored by either user or com
let userScore = 0;
let comScore = 0; 
let roundCounter = 0;

// to commence game, add an Event Listener for buttons
const options = document.querySelectorAll('.option');
options.forEach(option => option.addEventListener('click', playRound));

function playRound(event) {
    let userSelection = event.target.getAttribute("data-key");
    let roundResult = singleRound(userSelection, computerPlay());
    
    scoreCounter(roundResult);
}

function computerPlay() {
    // To simulate a computer opponent, randomly return either 'Rock', 'Paper', 'Scissors'
    
    // Define an array of options for computer to choose from
    let options = ['Rock', 'Paper', 'Scissors'];

    // Work in randomised logic to select between index no, 0, 1, 2
    let randomChoice = Math.floor(Math.random() * options.length);

    return options[randomChoice];
}

function scoreCounter(result) {
    let realResult = result.slice(0, 8);
    
    roundCounter += 1;
    // Determine if player won and if so add 1 to current score
    if (realResult == "You Win!") {
        userScore += 1;
    } else if (realResult == "You Lose") {
        comScore += 1;
    }
        
    // Display current score on DOM
    roundEval(result);
}

function roundEval(result) {
    console.log(typeof userScore);
    if (userScore == 5) {
        document.getElementById("round-number").textContent = "Winner Winner Chicken Dinner!!!";
        document.getElementById("round-result").textContent = ""
        document.getElementById("tallied-score").textContent = ""; 
        document.getElementById("opp-score").textContent = ""; 
        userScore = 0;
        comScore = 0;
        roundCounter = 0;
    } else if (comScore == 5) {
        document.getElementById("round-number").textContent = "You lost, get g00d n00b :)";
        document.getElementById("round-result").textContent = ""
        document.getElementById("tallied-score").textContent = ""; 
        document.getElementById("opp-score").textContent = ""; 
        userScore = 0;
        comScore = 0;
        roundCounter = 0;
    } else {
        document.getElementById("round-number").textContent = "Round Number: " + roundCounter;
        document.getElementById("round-result").textContent = result;
        document.getElementById("tallied-score").textContent = "Your current score is: " + userScore; 
        document.getElementById("opp-score").textContent = "Opponent's score is: " + comScore; 
    }
}

function singleRound(playerSelection, computerSelection) {
    // Determines which of the two selection has won the rock paper scissors round 
    // and returns a string declaring the winner

    // Convert player selection to case insensitive
    let correctedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1, playerSelection.length).toLowerCase();

    // Before starting game, confirm if user has inputted a valid input
    let options = ['Rock', 'Paper', 'Scissors'];
    if (!(options.includes(correctedPlayerSelection))) {
        return "Invalid input, try again";
    }

    // Pre-define a return variable that can be assigned to
    let declaration;

    // Write all possible comparison cases based on player selection 
    // 1. All scissor scenarios
    if (correctedPlayerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            declaration = "You Win! Scissors beats Paper";
        } else if (computerSelection == 'Rock') {
            declaration = "You Lose! Rock beats Scissors";
        } else {
            declaration = "Draw!";
        }
    } else if (correctedPlayerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            declaration = "You Win! Paper beats Rock";
        } else if (computerSelection == 'Scissors') {
            declaration = "You Lose! Scissors beats Paper";
        } else {
            declaration = "Draw!";
        }
    } else {
        if (computerSelection == 'Scissors') {
            declaration = "You Win! Rock beats Scissors";
        } else if (computerSelection == 'Paper') {
            declaration = "You Lose! Paper beats Rock";
        } else {
            declaration = "Draw!";
        }
    }


    // Return result as a String declaration
    return declaration;
    
}