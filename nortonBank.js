// Dean Black - nortonBank.js

var choice, deposit, withdraw, balance = 1000; // declares variables

function bank() { // Creates function
	choice = prompt("Choose one of the following options\n 1. Make a deposit\n 2. Make a Withdrawal\n 3. Check Balance \n 4. Exit"); // Asks for sub menu
	if (choice == "1"){ // Make a deposit
		deposit = parseInt(prompt("How much would you like to deposit?")); // Gets deposit amount
	  balance = balance + deposit; // Adds deposit to balance
	  alert("Your new balance is £" + balance + ".") // States new balance
	}

	else if (choice == "2"){ // Make a withdrawal
		withdraw = parseInt(prompt("How much would you like to withdraw?")); // Asks withdraw amount
	  if (withdraw <= balance) { // Makes sure user can afford it
	  	balance = balance - withdraw; // Does sum
	  	alert("Your new balance is £" + balance + ".") // States new balance
	    }else{alert("Invalid entry.")} // Anything but a number and this happens
	    }
	
	else if (choice == "3"){  // Check balance
		alert("Your balance is £" + balance + ".") // States balance
	}
  
	else if (choice == "4"){  // Exit
  	return process.exit(1); // Exits script
	}
  
	else{alert("Invalid entry.")}
  bank()
}
bank()
