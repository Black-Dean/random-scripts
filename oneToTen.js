// Dean Black - oneToTen.js

var num = parseInt(prompt("Please enter a number between 1 and 10")) // Parse int will make it so the user cannot enter decimal numbers and will take everything they entered up to the decimal, this ensures that they have entered a full number rather than a decimal number.
if (isNaN(num)) {
  alert("You didn't enter a number") // This will make sure they've entered a number
} else if (num >= 1 && num <= 10) { // This checks if the number is in the range
  alert("The result is "+ (num*2)) // This will give them a response with their number doubled
} else{
	alert("The number is not inbetween 1 and 10") // This will tell them their input was not inbetween 1 and 10
}
