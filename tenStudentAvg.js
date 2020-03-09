// Dean Black - tenStudentAvg.js

var sum = 0, mark, avg; // Declares variables

for (i = 0; i < 10; i++) { // Loop for getting marks
  mark = Number(prompt("Input students mark: "));
  sum = sum + mark;
} 

avg = sum / 10; // Calculate average
alert("The average mark is: " + avg);
