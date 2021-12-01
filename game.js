function computerPlay() {
    // To simulate a computer opponent, randomly return either 'Rock', 'Paper', 'Scissors'
    
    // Define an array of options for computer to choose from
    let options = ['Rock', 'Paper', 'Scissors'];

    // Work in randomised logic to select between index no, 0, 1, 2
    let randomChoice = Math.floor(Math.random() * options.length);

    return options[randomChoice];
}

// Test statement for computerPlay function
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

//Test Statements for singleRound function
let comChoice = computerPlay();
console.log(comChoice);
console.log(singleRound('PAPER', comChoice));

function game() {
    // Alert the user that game has commenced
    alert("Game started, 5 rounds of Rock Paper Scissors commencing...");

    // Predeclare a variable to store player's choice
    let playerChoice;
    // Predeclare a variable to store score
    let score = 0;
    // Predeclare a variable to store current round results;
    let result;

    // Start the for loop for 5 rounds
    for (let i=0; i < 5; i++) {
        // Prompt user for input
        playerChoice = prompt("Please enter your move: ");
        console.log(playerChoice);
        // Call the singleRound function 
        result = singleRound(playerChoice, computerPlay());
        // If user enters invalid input, reprompt them and remind them of valid options
        while (result == "Invalid input, try again") {
            playerChoice = prompt("Please enter a valid move (Rock, Paper or Scissors): ");
            result = singleRound(playerChoice, computerPlay());
        }

        // Announce result of round
        alert("Round " + (i+1) + ": " + result);

        // Slice off front portion of result to make comparison easy and redeclare result
        result = result.slice(0, 9);

        // Determine if player won and if so add 1 to current score
        if (result == "You Win!") {
            score += 1;
        } 
        
        // Display current score
        alert("Current score is: " + score);
    }

    // Determine game winner
    if (score > 2) {
        result = "You won! Congratulations";
    } else {
        result = "You lost, n00b!"
    }
    // Declare game winner
    return result;
}

//alert(game());