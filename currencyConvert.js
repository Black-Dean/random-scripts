// Dean Black - currencyConvert.js

var value, amountCurrency, commission; // Declares variables.
function convert() {
	choice = prompt("Are you converting\n1. Euros > Pounds.\n2. Pounds > Euros.\n3. Exit."); // Gives options to convert pound to euro or euro to pound
	if (choice == "1"){
  	amountCurrency = parseInt(prompt("How many euros would you like to exchange?")); // Asks how much they want to exchange
		value = amountCurrency - amountCurrency * 0.19; // Does the converting sum
			if (value > 500) { // Checks the value in pounds
      	alert("For " + amountCurrency + " euros you will recieve " + value + " pounds."); // Tells them how much they'll get
      }else {
      	commission = value / 100 * 3;  // Calculates commission
        value = value - commission; // Adds commission
        alert("For " + amountCurrency + " euros you will recieve " + value + " pounds."); // Tells them how much they'll get
      }
	} else if (choice == "2") {
    amountCurrency = parseInt(prompt("How many pounds would you like to exchange?")); // Asks how much they want to exchange
    value = amountCurrency * 1.19; // Does the converting sum
			if (amountCurrency > 500) { // Checks the value in pounds
      	alert("For " + amountCurrency + " pounds you will recieve " + value + " euros."); // Tells them how much they'll get
      }else {
      	commission = value / 100 * 3; // Calculates commission
        value = value - commission; // Adds commission
        alert("For " + amountCurrency + " pounds you will recieve " + value + " euros."); // Tells them how much they'll get
      }
  } else if (choice == "3") {
    process.exit(1);
  }
  else {alert("Invalid Input.");}
}convert()
