// Dean Black - rps.js

var rock = "rock", paper = "paper", scissors = "scissors", rps; // Declares variables


function randomInt(max) { 
  return Math.floor(Math.random() * Math.floor(max));
} // Gets a random number

function game() {
	userChoice = String(prompt("Rock, Paper or Sciccsors?"));
  var firstChar = userChoice.charAt(0); // Takes first character of their input so if they use the words Rock, Paper or Scissors it will still work.
  firstChar = firstChar.toUpperCase();
  computerChoice = randomInt(3); // Sets the choices 0 = Rock, 1 = Paper, 2 = Sciccsors
  
  if (computerChoice == 0) {
  	computerChoice = "Rock"
  }
  if (computerChoice == 1) {
  	computerChoice = "Paper"
  }
  if (computerChoice == 2) {
  	computerChoice = "Sciccors"
  }
  
  if (firstChar == computerChoice.charAt(0)) { // Detects draw
  	alert("User chose: " + userChoice + "\nComputer chose: " + computerChoice + "\nIts a draw.")
  } 
  // Detects if user wins
  else if (firstChar == "R" && computerChoice.charAt(0) == "S") {
    alert("User chose: " + userChoice + "\nComputer chose: " + computerChoice + "\nUser wins")
  } else if (firstChar == "S" && computerChoice.charAt(0) == "P") {
    alert("User chose: " + userChoice + "\nComputer chose: " + computerChoice + "\nUser wins")
  }else if (firstChar == "P" && computerChoice.charAt(0) == "R") {
    alert("User chose: " + userChoice + "\nComputer chose: " + computerChoice + "\nUser wins")
  } else { // If user did not win and it was not a draw then computer wins
    alert("User chose: " + userChoice + "\nComputer chose: " + computerChoice + "\nComputer wins")
  }
	
}
game()
