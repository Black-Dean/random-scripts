// Dean Black - sunnyTours.js

var total, adults = parseInt(prompt("How many adults are there?")); var children = parseInt(prompt("How many children are there?")); // Declare all vars and asks for amount of children and adults
if (isNaN(adults) || isNaN(children)) { // Checks if the input was a number
	alert("Sorry but it seems as if you haven't entered your numbers correctly.")
}else { 
	total = (adults * 60) + (adults * 210) + (children * 20) + (children * 110) // Gets the total
	alert("There are " + adults + " adults & " + children + " children.\nMaking the total cost £" + total + ".") // Gives an output
}
