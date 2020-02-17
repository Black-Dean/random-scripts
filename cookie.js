var flour = 1.50; var butter = 1.25; var eggs = 2.75; var sugar = 0.99; var flavour = 0.50; var fuel = 4.75; var paper = 2.50; var selling; // Declare majority of variables

var batchCost = flour + butter + eggs + sugar + flavour + fuel + paper; // Add all products to get batch cost
var cookieCost = (batchCost / 50); // Get cost per cookie and round to two decimal places.
cookieCost = cookieCost.toFixed(2);

cookiePrice = Number(prompt("How much are you selling each cookie for? ")); // Get price of each cookie
console.log(cookiePrice)
if (isNaN(cookiePrice)) { // Checks for number
  alert("You have not entered a number 0 has been set as default");
  cookiePrice = 0;
}

singleProfit = cookiePrice - cookieCost; // Calculate profits and rounds
singleProfit = singleProfit.toFixed(2);
batchProfit = singleProfit * 50;
batchProfit = batchProfit.toFixed(2);


alert("It will cost " + batchCost + " to make 50 cookies." + "\nTo make one cookie it will cost " + cookieCost + "\nYour profit per cookie is £" + singleProfit + " per cookie." + "\nMeaning your profit per batch is £" + batchProfit + ".");


