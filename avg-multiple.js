var amount = parseInt(prompt("How many numbers would you like to input? ")); // Ask for total amount of numbers
var num = [];var i = 0; var avg; var total; // Declare all variables

while (amount > i++) { // While loop to ask for numbers and make array
  var number = parseInt(prompt("Enter number " + i + ": "))
  num.push(number); // Push to end of array
}
total = num.reduce((a, b) => a + b, 0) // Gets the total in the array
avg = total / amount; // Gets adverage
alert(avg); // Outputs adverage
