// press a key to start the game
// display wins
// display current score
// display remaining guesses
// display letters guessed
// display dashes indicating how many letters (ie: HITMAN = ___ ___ );
// display a hint button******* BONUS

// Word is chosen by random in an array
// Player hits keys to guess hidden letters;
// player is allowed 10 tries to guess word;
// if player knows whole word they can enter it;
// display letters player guessed below;
// if turns equals zero and word not displayed - player loses;
// if turns is greater than zero and player guesses word - player wins;
// hint button shows a letter;
// if game over prompt to play again !
// if player guesses a correct letter the tries stay the same


// Global Variables
var words = ["beetlejuice", "the princess bride", "flash dance", "ghost busters", "footloose", "top gun"];
var wins = 0;
var guesses = 10;
var emptyMovie = " ";
var blanksSucceses = [];
var splitLetters = [];
var display = [splitLetters];
var numBlanks = 0;
var lettersGuessed = [];
// var remainingLetters = words.length;
var remainingLetters = 0;

// var remainingLetters = ;

function beginGame() { //start the game
    confirm("Want to play Hangman?")

    // restart game
    guesses = 10;
    lettersGuessed = [];
    blanksSucceses = [];
    remainingLetters = 0;

    emptyMovie = words[Math.floor(Math.random() * words.length)]; //pick a random word from the array
    console.log(emptyMovie)
    splitLetters = emptyMovie.split(''); //creates the dashes in the html so the player knows how may letters they are guessing
    // remainingLetters = splitLetters.length;
    // console.log(splitLetters)
    console.log("After for loop: " + remainingLetters)



    for (var i = 0; i < splitLetters.length; i++) {
        if (splitLetters[i] != " ") {
            blanksSucceses[i] = "_"; //for loop to determine dashes for letter placeholders
        } else {
            blanksSucceses[i] = "-";
        }
    }
    console.log("1Split Letters:" + splitLetters)

    for (let i = 0; i < splitLetters.length; i++) {
        if (splitLetters[i].indexOf(' ') >= 0) {
            console.log("its blank!")
        } else {
            remainingLetters++;
        }

    };
    console.log("2Split Letters" + splitLetters)
    console.log("After for loop: " + remainingLetters)

    document.getElementById("emptyMovie").innerHTML = blanksSucceses.join(" ");
    document.getElementById("wins").innerHTML = wins; //wins base #
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    document.getElementById("guesses").innerHTML = guesses; //wins base #
}

function checkLetters(letter) { //for loop function to determine if guessed letter is in the word
    var isLetterInWord = false;

    for (var i = 0; i < emptyMovie.length; i++) { // check words array for correct word and replace empty array with correct letter
        if (emptyMovie[i] === letter) {
            if (emptyMovie != " ") {
                isLetterInWord = true;
                blanksSucceses[i] = letter;
                remainingLetters--;
                console.log(isLetterInWord);
                console.log("remainingLetters" + remainingLetters);
            }
        }
    }
    // for (var i = 0; i < blanksSucceses.length; i++) {
    //     if (blanksSucceses === " ")
    //         blanksSucceses.splice(i, 1);
    // }
    if (isLetterInWord === false) {
        lettersGuessed.push(letter);
        guesses--;
    }
    console.log(lettersGuessed);
    document.getElementById("emptyMovie").innerHTML = blanksSucceses.join(" ");
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed.join(" ");
    document.getElementById("guesses").innerHTML = guesses; //wins base #
}


function roundComplete() {
    console.log("Wins: " + "wins" + "Guesses Remaining: " + "guesses")
    console.log(emptyMovie);
    console.log("blankSuccesses " + blanksSucceses.join());
    console.log("blankSuccesses to String " + blanksSucceses.toString());
    currentSuccesses = blanksSucceses.toString();
    console.log(currentSuccesses);

    if (remainingLetters == 0) {
        console.log(emptyMovie + " ....");
        console.log(emptyMovie === "ghost busters");
        wins++;

        if (emptyMovie == "ghost busters") {
            document.getElementById("gamePlay").src = "https://upload.wikimedia.org/wikipedia/en/2/2f/Ghostbusters_%281984%29_theatrical_poster.png";
        }
        else if (emptyMovie == "flash dance") {
            document.getElementById("gamePlay").src = "https://resizing.flixster.com/ilKQ_IlpDyXiMCEOCxkIree7AU4=/206x305/v1.bTsxMTE3NjQ2OTtqOzE3NzY5OzEyMDA7ODAwOzEyMDA";
        }
        else if (emptyMovie == "footloose") {
            document.getElementById("gamePlay").src = "https://resizing.flixster.com/_FB-5Rby1WUHkt-VLreowJYblKk=/206x305/v1.bTsxMTE2ODk0MDtqOzE3NzY5OzEyMDA7ODAwOzEyMDA";
        }
        else if (emptyMovie == "the princess bride") {
            document.getElementById("gamePlay").src = "https://images-na.ssl-images-amazon.com/images/I/815sfDB8mEL._SY445_.jpg";
        }
        else if (emptyMovie == "beetlejuice") {
            document.getElementById("gamePlay").src = "https://images-na.ssl-images-amazon.com/images/I/91DswgdbVrL._RI_.jpg";
        }
        document.getElementById("wins").innerHTML = wins;
        alert("You Win");
        beginGame();
    }

    else if (guesses <= 0) {
        alert("You Lost!");
        beginGame();
    }


}

window.onload = function startGame() {
    beginGame();
}

//play the game
document.onkeyup = function (event) {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(lettersGuessed);
    roundComplete();

}