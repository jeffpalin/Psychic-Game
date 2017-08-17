// Creating variables to hold the number of wins, losses, guesses, and total guesses. Guesses start at 10


var letters = [];
var wins = 0;
var losses = 0;
var guesses = 10;


// This function produces a random letter for the computer

// escape = 27

var computerGuess = String.fromCharCode(97 + Math.round(Math.random() * 25));

// This function displays the variables in the HTML prior to onkeyup.function.

function updateDom() {
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guesses").innerHTML = guesses;
    document.querySelector("#letters").innerHTML = letters;
}

updateDom();

// This function resets the variables when the user wins

function reset() {
    guesses = 10;
    letters = [];
    computerGuess = String.fromCharCode(97 + Math.round(Math.random() * 25));
}


// Determines which key was pressed.

document.onkeyup = function(event) {
    var userGuess = event.key;


    // Tracks wins, losses, guesses left, and total guesses


    if (userGuess === computerGuess) {
        wins++;
        reset();
    } else if ((userGuess !== computerGuess) && (guesses === 0)) {
        losses++;
        reset();

    } else {
        guesses--;
    }

    //This function updates the record of userGuess

    letters.push(userGuess);

    //Run innerHTML function to update page after logic.

    updateDom();

    //Misc console logging for debugging

    console.log(computerGuess);
    console.log(userGuess);
    console.log("--------------------------");
    console.log(wins);
    console.log(losses);
    console.log(guesses);
    console.log("--------------------------");

}