// Dean Black - guess.js

var min = 1, max = 20, guess, correct = prompt("Enter a number:"); // Declare variables

function getGuess(min, max) { // Create function using variables
    guess = Math.floor((max + min) / 2); // Get rid of decimal and divide by two
    isCorrect(); // Call isCorrect function
}
function isCorrect() { // Declare function
    if (guess != correct) { // If guess is not correct min continue
        if (guess < correct) { // If guess less than correct min = guess
            min = guess;
        }
        if (guess > correct) { // If guess more than correct max = guess
            max = guess;
        }
        getGuess(min, max); // Call getGuess function
    } else if (guess == correct) { // Else if guess is correct out put the number is guess and end script
        alert("The number was " + guess);
        return process.exit(1);
    }
}
getGuess(min, max); // Call getGuess function
