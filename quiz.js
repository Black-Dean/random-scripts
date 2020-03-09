// Dean Black - quiz.js

var answer; // Declares variable 
while (answer != 50) { // while it is not equal to 50 it will continue to loop
  answer = Number(prompt("What does 100-50 equal? ")); // Asks math sum in prompt
}
alert("Well done that answer is correct."); // They got the answer correct

var answer = ""; // Resets variable

while (answer.toLowerCase() != "dalton") { // Makes it case insensitive
  answer = prompt("Who won the X-Factor last year?") // Asks who won in a prompt
  answer = answer.substring(0,6) // If anyone puts Dalton Harris they'll still be correct
}
alert("Well done that answer is correct."); // Tells them they are correct
