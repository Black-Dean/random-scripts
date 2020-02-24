var rock = "rock", paper = "paper", scissors = "scissors", rps;

//if (firstChar.toUpperCase() === rock.toUpperCase()) {}
function randomInt(max) { 
  return Math.floor(Math.random() * Math.floor(max));
}

function game() {
	userChoice = String(prompt("Rock, Paper or Sciccsors?"));
  var firstChar = userChoice.charAt(0); // Takes first character of their input so if they use the words Rock, Paper or Scissors it will still work.
  firstChar = firstChar.toUpperCase();
  computerChoice = randomInt(3); // 0 = Rock, 1 = Paper, 2 = Sciccsors
  
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
  } else if (firstChar == "R" && computerChoice.chatAt(0) == "S") {
  
  }
	
  
}
game()
