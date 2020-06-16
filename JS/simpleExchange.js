// Dean Black - simpleExchange.js

var pounds, euros, exchange = 1.19; // Declares variables

pounds = parseInt(prompt("How many pounds do you want to exchange?")) // Asks them how much pounds they want to exchange
pounds = Math.floor(pounds) // Converts to whole pound

if (pounds > 0) { // Makes sure amount is more than 0
	euros = pounds * exchange; // Calculates euros
  euros = Math.round(euros * 100) / 100 // rounds
	
  if (pounds > 500) { // If its more than 500 it'll go here to avoid comission
  	alert("In exchange for £" + pounds + " you will receive " + euros + " euros."); // Tells them how much they get
    }
	
  else if (pounds <= 500) { // If its equal to or less than 500 it comes here
  	euros = euros - ((euros / 100)*3) // Adds commission
    euros = Math.round(euros * 100) / 100 // Due to new commission this is required
    alert("In exchange for £" + pounds + " you will receive " + euros + " euros."); // Tells them how much they get
  }
	
  } else if (pounds <= 0) {
  	alert("Input error please input a number greater than 0.") // If someone inputs less than or equal to 0 or space
  } else {alert("Input error please input a number greater than 0.")} // If someone uses a letter
