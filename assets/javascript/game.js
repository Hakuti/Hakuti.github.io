//Properties set here
var word = "parrot";
var words = ["parrot", "madonna", "friends", "family", "children"];
var guessCounter = 5;
var wins = 0;
var losses = 0;
var firstDiv = document.getElementById("firstDiv");
var outerDiv = document.getElementById("outerDiv");
var guessedLettersDiv = document.getElementById("guessedLetters");

//Initial freebie word set up for game here
//Adds the elements to the DOM
for (var i = 0; i < word.length; i++) {
    var wordPTag = document.createElement("h1")
    wordPTag.textContent = "---"
    var wordPTagId = wordPTag.setAttribute("id", "h" + i)
    firstDiv.appendChild(wordPTag);
    // console.log(wordPTag);
}

//Function containing the entire game
function createGame(word) {

    //Event handler for key press
    document.onkeypress = function (event) {
        

        //checks to if the key pressed is within the word string
        if (word.includes(event.key)) {
            console.log("Includes it");

            //ReGex for checking the amount of occurences of the same word
            var occurenceCount = (word.match(new RegExp(event.key, "g")) || []).length;
            //if the occurence Count is over 1, then run a loop to differntiate between the two
            if (occurenceCount > 1) {

                for (var i = 0; i < word.length; i++) {
                    if (word[i] == event.key) {
                        var userGuessIndex = i;
                        console.log(userGuessIndex);
                        var userGuessTag = document.getElementById("h" + userGuessIndex);
                        // console.log(userGuessTag);
                        userGuessTag.textContent = event.key;
                    }
                }

            } else {
                //else run normally utilizing word.indexOf to find the userGuessIndex
                var userGuessIndex = word.indexOf(event.key)
                console.log(userGuessIndex);
                console.log("h" + userGuessIndex);
                var userGuessTag = document.getElementById("h" + userGuessIndex);
                console.log(userGuessTag);
                userGuessTag.textContent = event.key;

            }
            console.log("What is my word here: " + word);
            checkFilled(word);

        } else {
            //Adds a p element if guess is wrong to the guessLetters Div
            console.log(guessedLettersDiv);
            var guessedWords = document.createElement("p")
            guessedWords.textContent = (event.key);
            guessedLettersDiv.appendChild(guessedWords);
            console.log("Is not in word");
            guessCounter--;
            //when the guess counter reaches 0, this will run the resetGame function to reset everything.
            if (guessCounter == 0) {
                losses++;
                resetGame("loser", word, wins, losses);
                console.log(guessCounter);
                console.log("You lost buddy");


            }
        }
    }
}

createGame(word);

//function to check if everything is filled
//creates a string that adds on until filled with the correct answer
function checkFilled(word) {
    console.log("The word: " + word);
    var guessString = "";
    for (var i = 0; i < word.length; i++) {
        element = document.getElementById("h" + i).textContent;

        if (element != "---") {
            guessString += element;
            console.log(guessString);
            if (guessString == word) {
                console.log("You won!");
                console.log(guessString);
                wins++;
                resetGame("winner", word, wins, losses);

            }
        }


    }
}

//this function resets the game, adds wins and losses
//resets the guess and runs the resetElements function for resetting DOM objects
function resetGame(x, word, wins, losses) {
    guessCounter = 5;
    // var word = this.word;
    winTag = document.getElementById("winCounter");
    lossTag = document.getElementById("lossCounter");
    guessTag = document.getElementById("currentGuess");



    if (x == "winner") {
        winTag.textContent = "Wins: " + wins;
    } else if (x == "loser") {
        lossTag.textContent = "Loser: " + losses;
    }

    oldWord = word;
    console.log("Before reset: " + oldWord);
    newWord = words[Math.floor(Math.random() * words.length)];
    console.log("new word: " + newWord);
    guessString = ""
    resetElements(newWord, oldWord);

}

//This function takes two parameters the old referenced word
//and the new generated word  in resetGame();
function resetElements(newWord, oldWord) {
    console.log("Here in reset elements: " + oldWord);
    console.log("Here in reset elements: " + newWord);
    //for removing the old words
    for (var i = 0; i < oldWord.length; i++) {
        var node = document.getElementById("h" + i);
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }

    //for adding the new word with the following underscores to account for it
    for (var i = 0; i < newWord.length; i++) {
        console.log(newWord.length);
        var wordPTag = document.createElement("h1")
        wordPTag.textContent = "---"
        var wordPTagId = wordPTag.setAttribute("id", "h" + i)
        firstDiv.appendChild(wordPTag);

    }

    //for removing the guessed words
    var nodeGuessedLetters = document.getElementById("guessedLetters");
    console.log("count: " + nodeGuessedLetters.childElementCount);
    while (nodeGuessedLetters.hasChildNodes()) {
        nodeGuessedLetters.removeChild(nodeGuessedLetters.firstChild);
    }

    createGame(newWord);
}

// array.forEach(element => {

// });