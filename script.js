let humanScore = 0;
let computerScore = 0;
let round = 0;
document.getElementById("human-score").innerText = humanScore.toString();
document.getElementById("computer-score").innerText = computerScore.toString();
document.getElementById("round-counter").innerText = round.toString();

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
    document.getElementById("computer-choice").innerText = "The computer chose: " + comChoice;
    return comChoice;
}



// Gets the human choice based on which button is clicked and displays choice in span
function getHumanChoice(choice) {
    let humChoice = choice;
    document.getElementById("human-choice").innerText = "You chose: " + humChoice;
    console.log(choice);
    let comChoice = getComputerChoice();
    playGame(humChoice, comChoice);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
        Number(humanScore);
        Number(round);
        humanScore++;
        round++;
        document.getElementById("human-score").innerText = humanScore.toString();
        document.getElementById("round-counter").innerText = round.toString();
        document.getElementById("round-result").innerText = "You won Round " + round.toString();
        console.log(humanScore, round, computerScore);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        Number(humanScore);
        Number(round);
        humanScore++;
        round++;
        document.getElementById("human-score").innerText = humanScore.toString();
        document.getElementById("round-counter").innerText = round.toString();
        document.getElementById("round-result").innerText = "You won Round " + round.toString();
        console.log(humanScore, round, computerScore);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        Number(humanScore);
        Number(round);
        humanScore++;
        round++;
        document.getElementById("human-score").innerText = humanScore.toString();
        document.getElementById("round-counter").innerText = round.toString();
        document.getElementById("round-result").innerText = "You won Round " + round.toString();
        console.log(humanScore, round, computerScore);
    } else if (humanChoice === computerChoice) {
        document.getElementById("round-result").innerText = "Tied! Go again!";
        console.log('tied');
    } else {
        Number(computerScore);
        Number(round);
        computerScore++;
        round++;
        document.getElementById("computer-score").innerText = computerScore.toString();
        document.getElementById("round-counter").innerText = round.toString();
        document.getElementById("round-result").innerText = "You lost Round " + round.toString();
        console.log(humanScore, round, computerScore);
    }
    return Number(round), Number(humanScore), Number(computerScore);
}

function playGame(humanChoice, computerChoice) {
    let rockButton = document.getElementById('rock-button');
    let paperButton = document.getElementById('paper-button');
    let scissorsButton = document.getElementById('scissors-button');
    let restartButton = document.getElementById('restart-button');

    playRound(humanChoice, computerChoice);
    if (humanScore === 3 || computerScore === 3 || round === 5) {
        rockButton.style.display = 'none';
        paperButton.style.display = 'none';
        scissorsButton.style.display = 'none';
        restartButton.style.display = 'inline-block';

        if (humanScore === 3) {
            document.getElementById("game-result").innerText = "You won the Game! Use the Restart button to restart!";
        } else if (computerScore === 3) {
            document.getElementById("game-result").innerText = "You lost the Game! Use the Restart button to restart!";
        }
    } else {
        console.log('game running');
    }

}

function handleRestart() {
    // Resetting counters and elements to initial state
    humanScore = 0;
    computerScore = 0;
    round = 0;
    document.getElementById("human-score").innerText = humanScore.toString();
    document.getElementById("computer-score").innerText = computerScore.toString();
    document.getElementById("round-counter").innerText = (round + 1).toString();
    document.getElementById("human-choice").innerText = "Your choice";
    document.getElementById("computer-choice").innerText = "Computer's choice";
    document.getElementById("round-result").innerText = "";
    document.getElementById("game-result").innerText = "";


    // Resetting buttons
    let rockButton = document.getElementById('rock-button');
    let paperButton = document.getElementById('paper-button');
    let scissorsButton = document.getElementById('scissors-button');
    let restartButton = document.getElementById('restart-button');
    rockButton.style.display = 'inline-block';
    paperButton.style.display = 'inline-block';
    scissorsButton.style.display = 'inline-block';
    restartButton.style.display = 'none';
}
