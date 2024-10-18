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

