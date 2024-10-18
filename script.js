
function getComputerTurn() {
    let randomNum = 0;
    let output = '';
    randomNum = Math.floor(Math.random() * 3) + 1; // generate number from 1 to 3
    if (randomNum === 1) {
        output = 'rock';
    } else if (randomNum === 2) {
        output = 'paper';
    } else if (randomNum === 3) {
        output = 'scissors';
    } else {
        output = 'something went wrong';
    }
    return output;
}

console.log(getComputerTurn())