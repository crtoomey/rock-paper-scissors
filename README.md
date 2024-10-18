# rock-paper-scissors

A JavaScript project from The Odin Project.

# Pseudo code

## Function for computer turn

getComputerTurn {\
    let number = 0\
    number = CALCULATE randomNum\
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
CALL getComputerTurn