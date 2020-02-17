var min = 1, max = 20, guess, correct = prompt("Enter a number:");

function getGuess(min, max) {
    guess = Math.floor((max + min) / 2);
    isCorrect();
}
function isCorrect() {
    if (guess != correct) {
        if (guess < correct) {
            min = guess;
        }
        if (guess > correct) {
            max = guess;
        }
        getGuess(min, max);
    } else if (guess == correct) {
        alert("The number was " + guess);
        return process.exit(1);
    }
}
getGuess(min, max);
