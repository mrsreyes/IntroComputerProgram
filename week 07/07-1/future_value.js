var $ = function(id) {
    return document.getElementById(id);
}
var getRandomNumber = function(max) {
    var random;
    if (!isNaN(max)) {
        random = Math.random(); //value >= 0.0 and < 1.0
        random = Math.floor(random * max); //value is an integer between 0 and max - 1
        random = random + 1; //value is an integer between 1 and max
    }
    return random;
}

var calculateFV = function(investment,rate,years) {
	var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
		futureValue += futureValue * rate / 100;
		if ( futureValue == Infinity ) {
			alert ("Future Value = " + futureValue + "\n i = " + i);
			i = years;
		}
    }
	alert ("The maximum value for a JavaScript number is \n" + Number.MAX_VALUE);
    futureValue = futureValue.toFixed(2);
	return futureValue;
}

var formatFV = function(futureValue) {
	var decimalPlace = futureValue.indexOf(".");
	var cents = futureValue.substring(decimalPlace + 1, decimalPlace + 3);
	var hundreds = futureValue.substring(decimalPlace - 3, decimalPlace);
	var thousands = "";
	var millions = "";
	if (decimalPlace < 6) {
		thousands = futureValue.substring(0, decimalPlace - 3);
		millions = "";
	}
	else {
		thousands = futureValue.substring(decimalPlace - 6, decimalPlace - 3);
		millions = futureValue.substring(0, decimalPlace - 6);
	}
	var futureValueFormatted = "";
	if (decimalPlace >= 7) {
		futureValueFormatted = "$" + millions + "," + thousands + "," + hundreds + "." + cents;
	}
	else {
		futureValueFormatted = "$" + thousands + "," + hundreds + "." + cents;
	}
	return futureValueFormatted;
}

var processEntries = function() {
   // var investment = parseFloat( $("investment").value );
   // var rate = parseFloat( $("annual_rate").value );
   // var years = parseInt( $("years").value );
	var futureValue;
	var investment = getRandomNumber(50000);
	$("investment").value = investment;
	var rate = getRandomNumber(15);
	$("annual_rate").value = rate;
	var years = getRandomNumber(50);
	$("years").value = years;
		
	if (isNaN(investment) || investment <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(rate) || rate <= 0) {
		alert("Must be > 0");
	}
	else if (isNaN(years) || years <= 0) {
		alert("Must be > 0");
		allValid = false;
	}
	else {
		futureValue = calculateFV(investment,rate,years);
		$("future_value").value	= formatFV(futureValue);
	}
}

var getDate = function() { //pg 221 reference for future use
	var now = new Date();
	var month = now.getMonth() + 1;
	month = (month < 10) ? "0" + month : month;
	var day = now.getDate();
	day = (day < 10) ? "0" + day : day;
	var year = now.getFullYear();
	var string = "Today is " + month + "/" + day + "/" + year + " at ";
	var hours = now.getHours();
	var minutes = now.getMinutes();
	minutes = ( minutes < 10 ) ? "0" + minutes : minutes;  // Pad minutes
	var string = "Today is " + month + "/" + day + "/" + year;
	string += " at " + hours + ":" + minutes + ".";	
	return string;
}

window.onload = function() {
	$("date").firstChild.nodeValue = getDate();
    $("calculate").onclick = processEntries;
    $("investment").focus();
}