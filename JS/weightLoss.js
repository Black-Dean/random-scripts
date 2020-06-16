var currentWeight = 0.0; targetWeight = 0.0; weeks = 0; // Declares variables

currentWeight = parseFloat(prompt("How much do you weigh? ")) // Asks for user input opf their weight
targetWeight = parseFloat(prompt("What is your target weight? ")) // Asks for user input of their target weight
if (currentWeight > 0 && targetWeight > 0) { // Checks if they're both more than 0
  if (currentWeight > targetWeight) { // Checks if current is more than target
    while (currentWeight > targetWeight) { // Starts while loop for the math
      currentWeight -= 1.38 // Takes 1.38 away from currentWeight
      weeks++ // Adds 1 to weeks
    }
    alert("It will take " + weeks + " weeks to reach your target") // Tells user how long it'll take to get their target
  } else {
    alert("Current weight must be more than target weight") // Tells user they've input weights incorrectly
  }
} else {
  alert("Invalid input") // Tells user they've done something wrong
}
