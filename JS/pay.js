var hours = parseInt(prompt("How many hours did you work? ")); wages = 0.0; // Declares variables
const pay = 7.8; overtime = 12.5; // Declares constants
if (hours > 0 && hours < 38) { // Checks if hours is more than 0 and less than 38
  wages = hours * pay; // Calculates pay
  alert("Earned £" + wages.toFixed(2)) // Gives user feedback and rounds
} else if (hours > 37) { // if they've worked 38 hours or more then this happens
  wages = (37 * pay) + ((hours -37) * overtime) // Rather than * pay its overtime
  alert("Earned £" + wages.toFixed(2)) // gives user feedback and rounds
} else {
  alert("Invalid entry") // Tells them input is invalid
}
