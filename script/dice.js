function roll(amount, sides) {
	result = "";
	var i;
	
	for(i = 0; i < amount; i++) {
		result += Math.floor(Math.random()*sides+1);
	}
		
	console.log(result);
}