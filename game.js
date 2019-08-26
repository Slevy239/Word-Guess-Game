var possiblewords = ['javascript', 'html', 'coding', 'css', 'jquery'];
var random = possiblewords[Math.floor(Math.random() * possiblewords.length)];
var underscored = [];
var guessedletters = [];
var remainingguesses = 15;
var wins = 0;
var correctguess = [];
var uniqueArray = [];
console.log(random);
// NEED TO STOP UNIQUE ARRAY FROM CORRECT GUESSED LETTERS


for (var i = 0; i < random.length; i++) {   //gives randomly selected word "_" in place of it's characters
    underscored[i] = "_";
}

document.onkeyup = function (event) {          //initiates game with key press
    if (event.keyCode > 64 && event.keyCode < 91) {  // limits to letters only
        var UserInput = event.key;  //userinput is an event
        guessedletters.push(UserInput); // push guess into array
        remainingguesses--;  //removes guess

        for (var j = 0; j < random.length; j++) {
            if (random[j] === UserInput) {
                underscored[j] = UserInput;
                guessedletters.push(UserInput);
                uniqueArray = guessedletters.filter(function (item, pos, self) {
                    return self.indexOf(item) == pos;
                });
            }
        }
        console.log(uniqueArray);
        document.getElementById("guessedletters").textContent = uniqueArray.join(',');
        document.getElementById("user-guess").textContent = underscored.join(" ");  // removes commas

    }

    document.getElementById("remainingguesses").textContent = remainingguesses;  //displays guesses
    if (underscored.join("") === random) {   // win condition 
        wins++;
        document.getElementById("result").innerHTML = "YOU WIN!";
        document.getElementById("wins").textContent = wins;
    }
    if (remainingguesses <= 0) { // loss
        document.getElementById("result").innerHTML = "YOU LOSE!";
    }
};

