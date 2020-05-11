// Dean Black
// 11/05/2020
// 11:20 - 11:30
// checkPin.js

var valid = false; // Global variable for valid
function checkPass() { // Declare function checkPass
  var password = ""; count = 1; // Declare all variables
  
  while (password != "123XY" && count < 4) { // Checks if the password is correct and if attempts is less than 4
    password = String(prompt("What is the password? ")) // Prompts for user input of the password
    if (password != "123XY") { // Checks if the password is incorrect
      alert("Invalid Password Attempt (" + count + "/3)") // Gives user feedback
      count++ // Adds 1 to count / the attempts
    } else {
      valid = true // Sets valid to true
      return valid; // Returns valid
    }
  }
}

checkPass() // Call function checkPass

if (valid === true) { // Checks if valid is true
  alert("Password Correct") // Gives user feedback
} else { // Else it tells the user it is incorrect
  alert("Password Incorrect") // Gives user feedback
}
