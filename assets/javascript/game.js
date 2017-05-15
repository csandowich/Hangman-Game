var randomLetters = 
["a",
 "b",
  "c",
   "d",
    "e",
     "f",
      "g",
       "h",
        "i",
         "j",
          "k",
           "l",
            "m",
             "n",
              "o",
               "p",
                "q",
                 "r",
                  "s",
                   "t",
                    "u",
                     "v",
                      "w",
                       "x",
                        "y",
                         "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 10;

document.onkeyup = function () {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

console.log(userGuess);

var computerChoice = randomLetters[Math.floor(Math.random()*randomLetters.length)];

console.log(computerChoice);

if (userGuess === computerChoice){
 wins++;
}

else if(userGuess!== computerChoice) {
losses++ && guessesLeft--;
}
else {
	alert("Please choose a letter from the alphabet.")
}

var html = "<p> Press any key to get started!</p>" +
		"<p>wins: " + wins + "</p> " +
		"<p>losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesLeft + "</p>";

		document.querySelector("#game").innerHTML = html;


if (guessesLeft === 0 || wins === 1) {
            
            
            guessesLeft = 10;
            
     
            var pageReset = "<p>wins: " + wins + " </p> " +
                "<p> losses: " + losses + " </p> " +
                "<p> guesses left: " + guessesLeft + " </p> ";             

            document.querySelector('#game').innerHTML = pageReset;


        }


}

