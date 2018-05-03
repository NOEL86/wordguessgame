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
var words = ["beetlejuice", "the princess bride", "flash dance", "ghost busters", "footloose"];
var wins = 0;
var guesses = 10;
var emptyMovie = " ";
var blanksSucceses = [];
var splitLetters = [];
var display = [splitLetters];
var numBlanks = 0;
var lettersGuessed = [];

// var remainingLetters = ;

function beginGame() { //start the game
    confirm("Want to play Hangman?")

    // restart game
    guesses = 10;
    lettersGuessed = [];
    blanksSucceses = [];

    emptyMovie = words[Math.floor(Math.random() * words.length)]; //pick a random word from the array
    console.log(emptyMovie)
    splitLetters = emptyMovie.split(''); //creates the dashes in the html so the player knows how may letters they are guessing
    console.log(splitLetters)
    console.log("-------")

    console.log(blanksSucceses)

    for (var i = 0; i < splitLetters.length; i++) {
        blanksSucceses[i] = "_ "; //for loop to determine dashes for letter placeholders
        console.log(i);
    }
    document.getElementById("emptyMovie").innerHTML = blanksSucceses.join(" ");
    document.getElementById("wins").innerHTML = wins; //wins base #
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    document.getElementById("guesses").innerHTML = guesses; //wins base #
    console.log(blanksSucceses)
    console.log("-------")
}

function checkLetters(letter) { //for loop function to determine if guessed letter is in the word
    var isLetterInWord = false;

    for (var i = 0; i < emptyMovie.length; i++) { // check words array for correct word and replace empty array with correct letter
        if (emptyMovie[i] === letter) {
            isLetterInWord = true;
            blanksSucceses[i] = letter;
            console.log(isLetterInWord);
        }
    }

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
    if (emptyMovie.valueOf() == currentSuccesses.valueOf()) {
        wins++;
        alert("You Win");
        document.getElementById("wins").innerHTML = wins;
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




    // for (var j = 0; j < emptyMovie.length; j++) {
    //     if (userGuess === emptyMovie)
    // }


// function hasWhiteSpace(s) { possibly will remove space underscore in answer array
//     return /\s/g.test(s);
//   }
// my_string = my_string.replace(/,/g,""); regular expression 

// }       remainingLetters = splitLetters.length //for loop defines letters remaining 
// for (var j = 0; j < words.length; j++) {
        //         if (words[j] === guesses) {
        //             wordsArray[j] = guesses;
        //             remainingLetters--; //whatever letter the user guessed goes here
        //             document.getElementById("guesses").innerHTML = 10 - guesses;//subtract used guesses??
        //         }

        //         if () function () {
                        // (guesses < 10)
        //             //if guesses are less than 10 keep guessing
        //             if (guesses === 10) break;
        //         }

        //         alert(wordsArray.join(" ")); //word is guessed alert
        //         alert("You Guessed It!" + words);

        //         if (beginGame === false) {
        //             console.log("refused game");
        //         }

        //     };

        // }




// var playAgain = confirm("Want to play again?"); {
//     if (true)
//     else break;
// }






















// The Princess Bride clip https://www.youtube.com/watch?v=O6qpa-mRLnI
// Beetlejuice clip https://www.youtube.com/watch?v=QvT1wym97qo
// footloose clip https://www.youtube.com/watch?v=j8XGmZ8HDIU
// ghost busters clip https://www.youtube.com/watch?v=7_pR6mUYtOo
// flashdance clip https://www.youtube.com/watch?v=6Vx4J_NtNPk