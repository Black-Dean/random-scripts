var flour = 1.50; var butter = 1.25; var eggs = 2.75; var sugar = 0.99; var flavour = 0.50; var fuel = 4.75; var paper = 2.50; var selling; // Declare majority of variables

var batchCost = flour + butter + eggs + sugar + flavour + fuel + paper; // Add all products to get batch cost
var cookieCost = (batchCost / 50); // Get cost per cookie and round to two decimal places.
cookieCost = cookieCost.toFixed(2);

cookiePrice = Number(prompt("How much are you selling each cookie for? ")); // Get price of each cookie

singleProfit = cookiePrice - cookieCost; // Calculate profits
batchProfit = singleProfit * 50;

alert("It will cost " + batchCost + " to make 50 cookies." + "\nTo make one cookie it will cost " + cookieCost + "\nYour profit per cookie is £" + singleProfit + " per cookie." + "\nMeaning your profit per batch is £" + batchProfit + "."); // Outputs data
