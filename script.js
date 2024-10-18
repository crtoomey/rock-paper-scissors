let humanScore = 0;
let computerScore = 0;

// Gets the computer choice randomly and displays choice in span
function getComputerChoice() {
    let randomNum = 0;
    let comChoice = '';
    randomNum = Math.floor(Math.random() * 3) + 1; // generate number from 1 to 3
    if (randomNum === 1) {
        comChoice = 'rock';
    } else if (randomNum === 2) {
        comChoice = 'paper';
    } else if (randomNum === 3) {
        comChoice = 'scissors';
    } else {
        comChoice = 'something went wrong';
    }
    document.getElementById("computer-choice").innerHTML = comChoice;
}



// Gets the human choice based on which button is clicked and displays choice in span
function getHumanChoice(choice) {
    let humChoice = choice;
    document.getElementById("human-choice").innerHTML = humChoice;
    console.log(choice);
    getComputerChoice();
}


console.log(getComputerChoice());
