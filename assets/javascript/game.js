// Creating variables to hold the number of wins, losses, guesses, and total guesses. Guesses start at 10

	
	var letters = [];
	var wins = 0;
	var losses = 0;
	var guesses = 10;


// This function produces a random letter for the computer

	var computerGuess = String.fromCharCode(97 + Math.round(Math.random() * 25));
	

// getTuneUp: function() {
 //          alert("Car is ready to go!");
 //          this.isWorking = true;

// Determines which key was pressed.

	document.onkeyup = function(event) {
    	var userGuess = event.key;

    

// Tracks wins, losses, guesses left, and total guesses


	if (userGuess === computerGuess) {
		wins++;
		reset();
	} else if ((userGuess !== computerGuess) && (guesses === 0)) {
		losses++;
		letters.push(userGuess);
	}	else {
			guesses--;
	}


//Misc console logging for debugging

	console.log(computerGuess);
	console.log(userGuess);
	console.log("--------------------------");
	console.log(wins);
	console.log(losses);
	console.log(guesses);
	console.log("--------------------------");

//This pulls the data for use in the HTML page

document.querySelector("#wins").innerHTML=wins;
document.querySelector("#losses").innerHTML=losses;
document.querySelector("#guesses").innerHTML=guesses;
document.querySelector("#letters").innerHTML=letters;



// This function resets the variables when the user wins

	function reset () {
		document.wins = 0;
		document.losses = 0;
		document.guesses = 10;
		document.letters = [];
		computerGuess();

}
}


