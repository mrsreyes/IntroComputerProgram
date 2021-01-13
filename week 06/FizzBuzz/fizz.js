	var limit = prompt("Enter the number limit");
	var n = parseInt(limit);
	var length = 0;
	for(i = 1; i < n; i++){    
	length = length + " " + checkDiv();
}

	function checkDiv() {
	var result;
	if (i%3==0 && i%5==0) {
		result = "fizzbuzz ";
		return result;
	}
	else if (i%3==0) {
		result = "fizz ";
		return result;
	}
	else if (i%5==0) {
		result = "buzz ";
		return result;
	}
	else return i;
}
	alert(length);
