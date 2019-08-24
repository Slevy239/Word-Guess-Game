var possiblewords = ['javascript', 'html', 'coding', 'css', 'jquery'];
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
        document.getElementById("guessedletters").textContent = [...new Set(guessedletters)];    //only allows for unique guesses
        document.getElementById("user-guess").textContent = underscored.join(" ");  // removes commas
        guessedletters.push(UserInput);   // displays guesses in guessedletters array
        remainingguesses--;  //removes guess
        
    } 
    for (var j = 0; j < random.length; j++) {
        if (random[j] === UserInput) {  
            underscored[j] = UserInput;   //replaces underscore with userinput if correct
        }
    
    }
document.getElementById("remainingguesses").textContent = remainingguesses;  //displays guesses
if (underscored.join("") === random) {   // win condition 
    wins++;
    document.getElementById("result").innerHTML = "YOU WIN!"
    document.getElementById("wins").textContent = wins;
}
if (remainingguesses <= 0) { // loss
    document.getElementById("result").innerHTML = "YOU LOSE!";
}
};

