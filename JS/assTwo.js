var currentWeight = 0.0, targetWeight = 0.0, weeks = 0; // Sets variables

currentWeight = parseFloat(prompt("How much do you weight? ")) // Prompts the user for currentWeight

targetWeight = parseFloat(prompt("What is your target weight? "))// Prompts the user for targetWeight

// Starts if loop checking weights
if (currentWeight > 0 && targetWeight > 0) {
  // Checks if currentWeight is more than targetWeight
  if (currentWeight > targetWeight) {
    // Starts while loop for weeks amount & weight calculation
    while (currentWeight >= targetWeight) {
      currentWeight = currentWeight - 1.38;
      weeks++;
    }
    prompt("It will take " + weeks + " weeks to reach " + targetWeight + " kg.") // Prompts user target time
  } else {
    prompt("Current weight must be more than target weight.") // Prompts them that their weight is less than their target.
  } 
} else {
  prompt("Invalid Entry.") // Prompts them that theres an invalid input.
}
