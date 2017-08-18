// Creating variables to hold the number of wins, losses, guesses, and total guesses. Guesses start at 10


var letters = [];
var wins = 0;
var losses = 0;
var guesses = 10;


// This function produces a random letter for the computer

var computerGuess = String.fromCharCode(97 + Math.round(Math.random() * 25));

// This function displays the variables in the HTML prior to onkeyup.function.

function updateDom() {
    document.querySelector("#letters").innerHTML = letters;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guesses").innerHTML = guesses;
}

updateDom();

// This function resets the variables when the user wins

function reset() {
    letters = [];
    guesses = 10;
    computerGuess = String.fromCharCode(97 + Math.round(Math.random() * 25));
}

// This function resets the variables when the user presses <space>;

function resetAll() {
    letters = [];
    wins = 0;
    losses = 0;
    guesses = 10;
    computerGuess = String.fromCharCode(97 + Math.round(Math.random() * 25));
}


// Determines which key was pressed.

document.onkeyup = function(event) {
    var userGuess = event.key;


    // Tracks wins, losses and guesses left

    if (event.keyCode === 32) {
        resetAll();
    } else if (userGuess === computerGuess) {
        wins++;
        reset();
    } else if ((userGuess !== computerGuess) && (guesses === 0)) {
        losses++;
        reset();
        } else {
            guesses--;
        }


    //This function adds to the array for userGuess

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