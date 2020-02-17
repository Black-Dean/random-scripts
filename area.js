var l; var a; var w; // Declare variables
l = parseInt(prompt ("Enter length: ")); // Ask for length
w = parseInt(prompt ("Enter width: ")); // Ask for width
a = l * w; // Multiple length by width
if (l === w) { // Check if its a square or rectangle and use appropriate output.
  alert("The Area of the square is " + a);
} else {
  alert ("The area of the rectangle is " + a);
}
