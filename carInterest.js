var bank = 5800, i = 0, car = 6500; // Declare variables

while (bank < car) {
  car = car / 100 * 1 + car // Car interest
  bank = Math.floor(bank / 100 * 4 + bank) // Bank cost and round
  i++;
}
alert("It took " + i + " years for interested to buy the car worth £" + bank) // Output
