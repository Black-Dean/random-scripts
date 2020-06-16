// Dean Black - likeJS.js

var yes = "y", no = "n", answer = String(prompt("Do you like javascript? ")); // Sets all variables and aks them for input
var firstChar = answer.charAt(0) // Takes first character of their input so if they use the words Yes or No it will still work
if (firstChar.toUpperCase() === yes.toUpperCase()) { // This makes it case insensitive & checks if it is equal to yes
	alert("You have good taste!");
} else if (firstChar.toUpperCase() === no.toUpperCase()) {
	alert("We can’t all have brains!")
} else {
	alert("You did not answer correctly.") // If they input anything that doesn't start with Y or N
}
