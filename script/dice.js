function roll(amount, sides) {
	result = "You rolled "+amount+"d"+sides+" and got: ";
	var i;
	
	for(i = 0; i < amount; i++) {
		result += (Math.floor(Math.random()*sides+1))+" ";
	}
		
	document.getElementById("OUTPUT").innerHTML = result;
}