var pounds, euros, exchange = 1.19; // Declares variables

pounds = parseInt(prompt("How many pounds do you want to exchange?")) // Asks them how much pounds they want to exchange
if (pounds > 0) { // Makes sure amount is more than 0
	euros = pounds * exchange; // Calculates euros
  if (pounds > 500) { // If its more than 500 it'll go here to avoid comission
  	alert("In exchange for £" + pounds + " you will receive " + euros + " euros."); // Tells them how much they get
    }
  else if (pounds <= 500) { // If its equal to or less than 500 it comes here
  	euros = euros - ((euros / 100)*3) // Adds commission
    alert("In exchange for £" + pounds + " you will receive " + euros + " euros."); // Tells them how much they get
  }
  }else {alert("Invalid Entry.")} // If someone enters 0, negative or a letter it'll go here.
