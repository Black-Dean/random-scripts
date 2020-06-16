// Dean Black - repeatThis.js

var num = Number(prompt("How many times would you like this to repeat? "));
var text = prompt("Enter the text you'd like to repeat");
for (i = 0; i < num; i++) {
   document.write(text,"</br>");
}
