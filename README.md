# rock-paper-scissors

A JavaScript project from The Odin Project.

# Pseudo code

## Function for computer turn

getComputerChoice {\
    let randomNum = 0\
    randomNum = CALCULATE random number\
    output = ''\
    IF randomNum === 1 THEN\
        output = 'rock'\
    ELSE randomNum === 2 THEN\
        output = 'paper'\
    ELSE randomNum === 3 THEN\
        output = 'scissors'\
    ELSE\
        output = 'something went wrong'\
    ENDIF\
    console.log(output)\
}\
\
CALL getComputerChoice

## Function for human choice

getHumanChoice {\
    output = ''\
    IF rock button is clicked THEN\
        output = 'rock'\
    ELSE paper button is clicked THEN\
        output = 'paper'\
    ELSE scissors button is clicked THEN\
        output = 'scissors'\
    ELSE\
        output = 'something went wrong'\
    ENDIF\
    console.log(output)\
}\
\
CALL getHumanChoice

## Function for a single round of rock, paper, scissors

playRound(humanChoice, computerChoice) {\
    IF humanChoice === rock and computerChoice === scissors THEN\
        CALCULATE humanScore + 1\
        CALCULATE round + 1\
    ELSE humanChoice === paper and computerChoice === rock THEN\
        CALCULATE humanScore + 1\
        CALCULATE round + 1\
    ELSE humanChoice === scissors and computerChoice === paper THEN\
        CALCULATE humanScore + 1\
        CALCULATE round + 1\
    ELSE humanChoice === computerChoice THEN\
        ALERT go again\
    ELSE THEN\
        CALCULATE computerScore + 1\
        CALCULATE round + 1\
    ENDIF\
}\

CALL playRound(humanChoice, computerChoice)