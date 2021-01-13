var $ = function(id) {
    return document.getElementById(id);
};
var calculateFv = function(invest,rate,year) {
	var futureVal = invest;
    for (var i = 1; i<= year; i++ ) {
		futureVal = futureVal+ futureVal * rate / 100;
    }
    futureVal = futureVal.toFixed(2);
	return futureVal;
};
var processEntries = function() {
    var invest = parseFloat($("invest").value);
    var rate = parseFloat($("yearly_rate").value);
    var year = parseInt($("year").value);
	var isValid = true;
	
	if (isNaN(invest) || invest<= 0 ||invest> 100000) {
		$("invest_error").firstChild.nodeValue= "Must be > 0 and <= 100000";
		isValid = false;
	}
	else {
		$("invest_error").firstChild.nodeValue = "";
	}
	if (isNaN(rate)|| rate <= 0||rate > 15) {
		$("rate_error").firstChild.nodeValue= "Must be > 0 and <= 15";
		isValid = false;
	}
	else {
		$("rate_error").firstChild.nodeValu = "";
	}
	if (isNaN(year) ||year <= 0 ||year > 50) {
		$("year_error").firstChild.nodeValue= "Must be > 0 and <= 50";
		isValid = false;
	}
	else {
		$("year_error").firstChild.nodeValue= "";
	}
	if (isValid) {
		$("future_value").value	= calculateFv(invest,rate,year);
	}
};
window.onload = function() {
    $("calculate").onclick = processEntries;
    $("invest").focus();
};