    "use strict";
	
	window.onload = function() {
	document.getElementById('first').focus();
	document.getElementById("button").onclick = function() {
    getNumber(document.getElementById('first').value);
  }

  document.getElementById("entered").innerHTML = "Input a number and click the button to calculate";
}
	function getNumber(num) {
	num = parseInt(num);
	var times = 0;
		while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = (3 * num) + 1;
    }
    times++;
}

  if (typeof(num) === undefined || isNaN(num) === true) {
    document.getElementById("entered").innerHTML = "Please enter a valid number";
  } else {
    document.getElementById("entered").innerHTML = "It takes " + times + " times for the entered number to reach 1";
  }
}