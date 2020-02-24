var total; var adults = parseInt(prompt("How many adults are there?")); var children = parseInt(prompt("How many children are there?"));
if (isNaN(adults) || isNaN(children)) {
	alert("Sorry but it seems as if you haven't entered your numbers correctly.")
}else { 
	total = (adults * 60) + (adults * 210) + (children * 20) + (children * 110) 
	alert("There are " + adults + " adults & " + children + " children.\nMaking the total cost £" + total + ".")
}
