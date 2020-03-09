// Dean Black - area.js

var l, a, w; // Declare variables
l = parseInt(prompt ("Enter length: ")); // Ask for length
w = parseInt(prompt ("Enter width: ")); // Ask for width
a = l * w; // Multiple length by width
if (l === w) { // Check if its a square or rectangle and use appropriate output.
  alert("The Area of the square is " + a + "in area.");
} else {
  alert ("The area of the rectangle is " + a + "in area.");
}
