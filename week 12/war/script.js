///make an object for the cards
var Card = function(suit, value){
	this.suit = suit;
	this.value = value;
}

//make deck object
var Deck = function(){
	//a deck is a collection of cards;
	this.cards = [];
}

Deck.prototype.add = function(newCard){
	this.cards.push(newCard);
	//push adds to the end of the array
}

Deck.prototype.draw = function(newCard){
	return this.cards.shift();
	//Gets card at the first position
}


Deck.prototype.shuffle = function(){
	this.cards.sort(
	//sorts based off of a function
		function(){
			//shuffles deck
			return 0.5 - Math.random();
		}
	);
}

//Create new deck
var deck = new Deck();
//Create the suits
var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
//Creates the values for the suits
var values = [1,2,3,4,5,6,7,8,9,10,11,12,13];
//create the cards
for(i in suits){
	for(k in values){
		var card = new Card(suits[i], values[k]);
		deck.add(card);
	}
}
deck.shuffle();
//we need to deal the deck

//this is the player class
var Player = function(){
	this.deck = new Deck();
}
//Creating the players
var human = new Player();
var computer = new Player();

//deal the deck
for(var i = 0; i < 52; i++){
	if(i % 2){
		human.deck.add(deck.draw());
	} else{
		computer.deck.add(deck.draw());
	}
}


//keep track on how many turns
var gamesPlayed = 0;

//onload function
window.onload = function(){
	document.getElementById("next").onclick = function(){
		gamesPlayed++;
		document.getElementById("played").innerHTML = 
		gamesPlayed;
		
		//draw cards
		var myCard = human.deck.draw();
		var comCard = computer.deck.draw();
		
		//output the card values to the screen
		document.getElementById("myCard").innerHTML =
		myCard.value + " of " + myCard.suit;
		
		document.getElementById("comCard").innerHTML =
		comCard.value + " of " + comCard.suit;
		
		if(myCard.value < comCard.value){
			//if computer wins keep comCard and keep my card
			computer.deck.add(myCard);
			computer.deck.add(comCard);
			var message = "The Computer Won The Hand!";
		} else if(myCard.value > comCard.value){
			//if you win keep the computer card and my card
			human.deck.add(myCard);
			human.deck.add(comCard);
			var message = "You won the hand!";
		} else {
			//to be quick we will make it a tie
			human.deck.shuffle();
			computer.deck.shuffle();
			var messsage = "You tied, both players lose!";
		}
			if(computer.deck.cards.length == 0 || human.deck.cards.length == 0){
				var message = "Game Over";
				document.getElementById("next").disabled = true;	
		}
		document.getElementById("message").innerHTML =  message;
		document.getElementById("myRemaining").innerHTML =  human.deck.cards.length;
		document.getElementById("comRemaining").innerHTML =  computer.deck.cards.length;
	}
}
