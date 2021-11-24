function computerPlay() {
    // To simulate a computer opponent, randomly return either 'Rock', 'Paper', 'Scissors'
    
    // Define an array of options for computer to choose from
    let options = ['Rock', 'Paper', 'Scissors'];

    // Work in randomised logic to select between index no, 0, 1, 2
    let randomChoice = Math.floor(Math.random() * options.length);

    return options[randomChoice];
}

console.log(computerPlay());