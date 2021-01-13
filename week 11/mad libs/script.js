function mad() {
  
  var person = prompt("Please enter your name.");
  var adj = prompt("Please enter an adjective."); 
  var noun = prompt("Please enter an noun.");  
  
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Please excuse " + person + " who is far too " + adj + " to attend "+ noun +" class.";
  }
}