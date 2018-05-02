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
var losses = 0;
var guesses = 10;
var emptyMovie = " ";
var underScores = [];
var splitLetters = [];
var display = [splitLetters];
// var userGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
//     'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//     't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersGuessed = " ";

// var remainingLetters = ;


window.onload = function beginGame() { //start the game
    confirm("Want to play Hangman?")
    document.getElementById("wins").innerHTML = wins; //wins base #
    document.getElementById("guesses").innerHTML = losses; //guesses base #
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    emptyMovie = words[Math.floor(Math.random() * words.length)]; //pick a random word from the array
    console.log(emptyMovie)
    splitLetters = emptyMovie.split(''); //creates the dashes in the html so the player knows how may letters they are guessing
    console.log(splitLetters)
    console.log("-------")

    for (var i = 0; i < splitLetters.length; i++) {
        underScores[i] = "_ "; //for loop to determine dashes for letter placeholders

    }
    console.log(underScores)
    console.log("-------")
    // document.getElementById("emptyMovie").innerHTML = document.write("S -> " + myArray.join(" "));
    document.getElementById("emptyMovie").innerHTML = underScores.join(" ");
    console.log(underScores)
}

// my_string = my_string.replace(/,/g,""); regular expression 

// }       remainingLetters = splitLetters.length //for loop defines letters remaining 
// for (var j = 0; j < words.length; j++) {
        //         if (words[j] === guesses) {
        //             wordsArray[j] = guesses;
        //             remainingLetters--; //whatever letter the user guessed goes here
        //             document.getElementById("guesses").innerHTML = 10 - guesses;//subtract used guesses??
        //         }

        //         if (guesses < 10) {
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