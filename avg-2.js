var amount = parseInt(prompt("How many numbers would you like to input? ")); var num = [];var i = 0; var avg; var total;
while (amount > i++) {
  var test = parseInt(prompt("Enter number " + i + ": "))
  num.push(test);
}
total = num.reduce((a, b) => a + b, 0)
avg = total / amount;
alert(avg);
