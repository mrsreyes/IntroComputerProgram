/*Makayla Steinmetz 04-01-2019*/
var user = 10;
var counter = 0;
var max = 5;
var answers = ['Sorry', 'Try Again', 'Opps'];
var answer = answers[Math.floor(Math.random()*answers.length)];

var randomNum = Math.floor(Math.random() * user) + 1;

var userID = localStorage.getItem("userID");

var userCheck = function(){
	var userID = prompt("Please Enter Your User ID.");
	localStorage.setItem("userID", userID);
}

if(localStorage.getItem("userID")){
	alert("Welcome back " + userID + "!");
}
else{
	userCheck();
}
// localStorage.removeItem("userID");

while (attempts != randomNum) {
	var attempts = prompt("Please pick a number between 1 and " + user);
	// localStorage.setItem("attempts", attempts);
	counter += 1;
	
	if(counter > max){
	document.write("<p>" + answer + "! the Correct Number was " + randomNum + ". Please Play Again!</p>");
	break;
	}
	
	if(attempts == randomNum){
		document.write("Correct!");
		document.write("<p>The Correct Number is " + randomNum + "</p>");
		document.write("<p>It took you " + attempts + " tries to get the correct number</p>");
	}
	
	// if(localStorage.getItem("userID")){
	// alert("Welcome back you used " + attempts + " last game!");
	// }
	// else{
	// alert("Broken!");
	// }
	
}

// Can't seem to get this to work in any sense?

	// var attempts = localStorage.set("attempts", attempts);
	// if(localStorage.getItem("attempts")){
	// document.write("Welcome back you used " + attempts + " last game!");
	// }
	// else{
		// document.write("Broken");
	// }
	// localStorage.removeItem("attempts");
