var age = parseInt(prompt("How old are you? ")); // Asks for age
if (isNaN(age)) { // Checks if input is not a number
	alert("You did not enter a number.") // Tells them its not a number
}
if (age > 4) { // Is age above 4
	alert("You must pay £3") // If it is they need to pay £3
} else if (age <= 4) { // If the age is less than or equal to 4 then they do not need to pay
	alert("You do not have to pay.")
}
