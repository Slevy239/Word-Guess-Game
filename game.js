var possiblewords = ['javascript', 'html', 'coding', 'css'];
var random = possiblewords[Math.floor(Math.random() * possiblewords.length)];
var underscored = [];
var guessedletters = [];
var remainingguesses = 15;
var wins = 0;
var correctguess = [];


for (var i = 0; i < random.length; i++) {   //gives randomly selected word "_" in place of it's characters
    underscored[i] = "_";
}

document.onkeyup = function start (event) {          //initiates game with key press
    if (event.keyCode > 64 && event.keyCode < 91) {
        var UserInput = event.key;
        document.getElementById("user-guess").textContent = underscored.join(" ");  // removes commas
        document.getElementById("guessedletters").textContent = [...new Set(guessedletters)];    //only allows for unique guesses
        guessedletters.push(UserInput);   // displays guesses in guessedletters array


        for (var j = 0; j < random.length; j++) {
            if (random[j] === UserInput) {  
                underscored[j] = UserInput;   //replaces underscore with userinput if correct
                remainingguesses--;  //removes guess
            }
            else {
                remainingguesses--; // remove guess
            }
        }
document.getElementById("remainingguesses").textContent = remainingguesses;  //displays guesses
    }
if (underscored.join("") === random) {   // win condition
    wins++;
    location.reload();
    console.log(wins)
}
if (remainingguesses <= 0) {
    alert("You LOSE!");
    location.reload();
}
};

