var correctUsername = "VeryImportantPerson"; var correctPassword = "secret"; // Sets correct login
var username = String(prompt("What your username? ")); // Asks for username
var password = String(prompt("What is your password? ")) // Asks for password

if (username === correctUsername && password === correctPassword) { // Checks if details are correct
  alert("Your login was correct welcome back " + username + "."); // Welcomes back if correct
} else {
  alert("Incorrect login.") // Tells them password is wrong
}
