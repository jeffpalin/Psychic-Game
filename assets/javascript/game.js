// Creating variables to hold the number of wins, losses, and ties. Guesses start at 10

	var guesses = 10;
	var wins = 0;
	var losses = 0;


// Determines which key was pressed.
	document.onkeyup = function(event) {
    	var userGuess = event.key;
// This function produces a random letter for the computer
    	var computerGuess = String.fromCharCode(97 + Math.round(Math.random() * 25));
   	


console.log(computerGuess);

// Tracks guesses, wins, and losses

	if (userGuess === computerGuess) {
		wins++;
	} else {
		guesses--;
	}

   console.log(guesses);
   console.log(wins);
   console.log(losses);





// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.

