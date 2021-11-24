function computerPlay() {
    // To simulate a computer opponent, randomly return either 'Rock', 'Paper', 'Scissors'
    
    // Define an array of options for computer to choose from
    let options = ['Rock', 'Paper', 'Scissors'];

    // Work in randomised logic to select between index no, 0, 1, 2
    let randomChoice = Math.floor(Math.random() * options.length);

    return options[randomChoice];
}

//console.log(computerPlay());

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


let comChoice = computerPlay();
console.log(comChoice);
console.log(singleRound('PAPER', comChoice));