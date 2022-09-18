'use strict';

/* 
# JavaScript War Game

The goal is to be the first player to win all 52 cards.

## THE DEAL

The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Anyone may deal first. Each player places his stack of cards face down, in front of him.

## THE PLAY

Each player turns up a card at the same time, and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.

If the cards are the same rank, it is War. Each player places three cards face down and one card face up. The player with the higher card takes both piles (ten cards). If the turned-up cards are again the same rank, each player places another three cards face down and turns another card face up. The player with the higher card takes all 18 cards, and so on.

## HOW TO KEEP SCORE

The game ends when one player has won all the cards.

## REQUIREMENTS

* You must have a constructor for Game, Player, Deck, and Card
* You must attach methods to the prototype chain
* You must create a basic UI that includes a draw button and message box that informs the game status after each draw (e.g. What cards were drawn? Which player won the hand? How many cards does each player have?)
 */
 
 class Game {
	 constructor(){
		 this.players = []; //every game you start will have this array including your new players.
	 };
	 
	 start(playerOneName, playerTwoName){ //creating a new deck from the deck class & shuffling it.
		 this.players.push(new Player(playerOneName));
		 this.players.push(new Player(playerTwoName));
		 let newDeck = new Deck();
		 let crtDeck = newDeck.createDeck();
		 let shuffDeck = newDeck.shuffleDeck(crtDeck);
		 return [this.players, shuffDeck];
	 };
	 
	 deal(players, deck){ //distributes prev shuffled cards to each player, alternating between cards when dealing.
		 for(var i = 0; i < deck.length; i = i+2){ // card from deck = position i. every second card will handed out.
			 this.players[0].playerCards.push(deck[i]); //this player gets every second card starting from the FIRST(i=0) position.
			 this.players[1].playerCards.push(deck[i+1]);//this player gets every second card starting from the SECOND(i=1) position.
		 };
		 return [players[0], players[1]]; //returns each player's hand.
	 };
	 
	 
	 compareHand(cards, players){
		 console.log('compare hand has been called');
		 const numOfCards = cards.length;
		 console.log(numOfCards, 'number of cards during compare');
		 var p1val, p2val;
		 if (numOfCards === 2){ //checks the total # of cards played first (in a normal hand).
			 console.log('if 2 is num of cards');
			 console.log(cards[0]['value']);
			 p1val = cards[0]['value']; //if you played a normal hand, stores the card value (ie. ace of clubs = val of 14) that the player played.
			 p2val = cards[1]['value'];  // ""player 2's card
		 }else{
			 console.log('if more than two cards');
			 //if more than two cards then they are at war and the previous played cards at the beginning of the array, use end of array position to find the current faceup card value
			 p1val = cards[cards.length-5]['value'];
			 p2val = cards[cards.length-1]['value'];
		 };

		 //p1val = 5;
		 //p2val = 5;
		 console.log(p1val, p2val); // if statements of comparing the players' cards' values.
		 if(p1val > p2val){
			userInstruction.innerHTML = players[0].playerName + ' has won the hand.';
			players[0].takeCards(players[0], cards); //if you won, you're players[0], and you take the cards played into your hand.
			warCheck = false;
		 }else if (p2val > p1val){
			userInstruction.innerHTML = players[1].playerName + ' has won the hand.'
			players[1].takeCards(players[1], cards); //does the same thing for player two if they win.
			warCheck = false;
		 }else if (p1val === p1val){ //if they had the same value, then you go to WAR.
			userInstruction.innerHTML = 'Players have tied, this means WAR! Click DRAW to play WAR!';
			console.log(oldCards, 'check old cards when players have tied, should be length 0 here');
			console.log(cards[0], cards[1]);
			warCheck = true; //set to true bc now we're at WAR.
			for (var i = 0;i<cards.length;i++){ //put the 2 faceup played cards into the 'stored cards(oldCards)' array for later distribution, depending on the victor of the WAR.
				oldCards.push(cards[i]);
			};
			console.log(oldCards, 'check old cards when players have tied, should be length 2 here');
		 };
		 //check if a player has won after the hand is over
		 newGame.updateDeck(players);
		 newGame.checkWin(players);
	 };
	 
	 updateDeck(players){ //supposed to update the # of cards in hand
		console.log('updateDeck called');
		 for(var i = 0; i < deckCount.length; i++){
			 deckCount[i].innerText = '('+ players[i].playerCards.length + ')';
		 };
	 };

	 
	 checkWin(players){
		 console.log('check win has been called');
		 const playerOneDeckForWin = players[0].playerCards.length;
		 const playerTwoDeckForWin = players[1].playerCards.length;
		 console.log(playerOneDeckForWin,playerTwoDeckForWin);
		 if(playerTwoDeckForWin === 0){
			 userInstruction.innerHTML = players[0].playerName + ' has won WAR!'
			 cardOutput[0].innerText = '';
			 cardOutput[1].innerText = '';
			 //p2DeckImage.innerHTML = '';
			 console.log('player 1 has won WAR');
		 }else if (playerOneDeckForWin === 0){
			 userInstruction.innerHTML = players[1].playerName + ' has won WAR!'
			 cardOutput[0].innerText = '';
			 cardOutput[1].innerText = '';
			 //p1DeckImage.innerHTML = '';
			 console.log('player 2 has won WAR');
		 };
	 };
	 
 };
 
 class Player {
	 constructor(name){
		 this.playerName = name;
		 this.playerCards = [];
	 };
	 
	 playHand(deck){
		 const card = deck.pop();
		 return card;
	 };
	 
	 playHandForWar(player){
		 var currentDeck = player.playerCards;
	     var faceDownCard1 = currentDeck.pop();
		 var faceDownCard2 = currentDeck.pop();
		 var faceDownCard3 = currentDeck.pop();
		 var faceUpCard = currentDeck.pop();
		 return [faceDownCard1,faceDownCard2,faceDownCard3, faceUpCard];
	 };
	 
	 takeCards(player, cards){ //the player who won receives the array of cards that were played.
		 console.log('take cards has been called');
		 for(var i = 0; i < cards.length; i++){ //loops thru whole played-cards array
			 console.log(cards[i], 'take card');
			 player.playerCards.unshift(cards[i]); // taking any received cards from winning, and placing them at the BOTTOM of their hand/deck.
		 };
		 setTimeout(function(){ // 3 seconds after a hand is won, it updates the instructions to the user and clears the outputs for the next round of play.
			userInstruction.innerHTML = 'Click DRAW to play the next hand.';
			//console.log(imgElement1, 'imgElement1 take');
			cardOutput[0].innerText='';
			cardOutput[1].innerText='';


			warOutput[0].innerText = '';
			warOutput[1].innerText = '';
			//warElement1.remove();
			//warElement2.remove();
			//warOutput[0].innerHTML = '';
			//warOutput[1].innerHTML = '';
		 },3000); 
	 };
	 
 };
 
 class Deck {
	 constructor () {
		 this.cards=[];
	 };
	 
	 createDeck(){ //all card values for the 52 total cards.
		 let suits = ['Clubs','Diamonds','Hearts','Spades'];
		 var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King','Ace'];
		 let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14];
		 
		 for (var i = 0; i < suits.length; i++){
			 for(var j = 0; j < ranks.length; j++){
				 this.cards.push(new Card(suits[i], ranks[j], values[j]));
			 };
		 };
		 return this.cards; //makes the initial deck of cards
	 };
	 
	 shuffleDeck(arr){	//base shuffle off of Knuth (fisher-yates) shuffle
		let currentIndex = arr.length;//define currentIndex as total amount of items in array
		let randomIndex;//define a random index used to shuffle
		
		//use a while loop, that runs while there are still items in the array
		while (currentIndex != 0){
			//define random index to use to choose an item in array to shuffle
			randomIndex = Math.floor(Math.random() * currentIndex);
			//decrease current index;
			currentIndex--;
			
			//swamp items or "shuffle" using random index and current index
			[arr[currentIndex], arr[randomIndex]] = [arr[randomIndex],arr[currentIndex]];
		};
		//return shuffled array
		return arr;
		};
 };
 
 class Card {
	 constructor(suit, rank, value){
		 this.suit = suit;
		 this.rank = rank;
		 this.value = value;
	 };
 };

/* const newGame = new Game();
const gameArr = newGame.start('Ryan','Challenger');
//const PlyrsArr = gameArr[0];
//const CrdArry = gameArr[1];
const playersArr = newGame.deal(gameArr[0], gameArr[1]);
//const ply1Deck = plyDecks[0];
//const ply2Deck = plyDecks[1];

for (var i = 0; i < playersArr.length; i++){
	console.log(playersArr[i]);
};


const ply1cards = playersArr[0].playerCards;
console.log(ply1cards);
for (var j = 0; j < ply1cards.length; j++){
	console.log(ply1cards[j]);
}; */

const newGame = new Game(); //creates the Game object using the constructor inside the Game class.
const startGame = newGame.start('Ryan','Challenger'); //starts the game, returns 2 separate players and their hands
var players = newGame.deal(startGame[0],startGame[1]);
var currentCards = []; //blank array of currently 'played' cards to compare values.
var oldCards = []; //the placevalue holder of current values of the 'tied' cards that send you to war, so more cards can be used for the war.
var warCheck = false; //we're not at war by default
//var playerOne = dealGame[0];
//var playerTwo = dealGame[1];
//var playerOneName = playerOne.playerName;
//var playerTwoName = playerTwo.playerName;
//var playerOneDeck = playerOne.playerCards;
//var playerOneDeck = dealGame[0].playerCards;
//var playerTwoDeck = playerTwo.playerCards;

//console.log(playerOneDeck, playerTwoDeck);

//for (var j = 0; j < dealGame.length; j++){
//	console.log(dealGame[j]);
//};


const drawButton = document.querySelector('[data-draw]');
const cardOutput = document.querySelectorAll('.card');
const warOutput = document.querySelectorAll('.war');
//const warOutput = document.querySelectorAll('.war'); // will only output 3 facedown cards and 1 face up in the event of a 'War'.
const deckCount = document.querySelectorAll('.deckCount');//to update total number of cards each player has in deck, currently not working
const userInstruction = document.querySelector('[data-instruction]'); //top header line, displaying updated instructions/announcements to the user.
var warElement2 = document.getElementById('war2');
var warElement1 = document.getElementById('war1');
var imgElement1 = document.getElementById('card1');
var imgElement2 = document.getElementById('card2');

//const decks = document.querySelectorAll('.deck');
//const p1DeckImage = document.querySelector('[data-p1-deck]');
//const p2DeckImage = document.querySelector('[data-p2-deck]');

/* userInstruction.style.display = 'initial';
cardOutput[0].style.display = 'initial';
cardOutput[1].style.display = 'initial';
decks[0].style.display = 'initial';
decks[1].style.display = 'initial'; */

drawButton.addEventListener('click', button => {
	//for some reason player 2 html elements disappear clicking draw button. cannot figure out why
	console.log('draw button clicked');
	console.log(oldCards, 'check old cards at beginning of draw');
	console.log(warCheck);
	if (!warCheck){ //if war is false (no triggered war event) then it's a normal round and this for loop WILL run.
		console.log('enter draw if statement');
		for (var i = 0; i < 2; i++){ //
			//console.log(dealGame[i]);
			//console.log(dealGame[i].playerCards);
			console.log('enter for loop for if war is false');
			var hand = players[i].playHand(players[i].playerCards);
			console.log(hand['rank']);
			console.log(hand['suit']);
			
			
			console.log("images/" + hand['rank'] + hand['suit'] + ".png");
			if(i===0){
				var img = document.createElement('img');
				img.src = ("images/" + hand['rank'] + hand['suit'] + ".png");

				console.log(imgElement1,'imgElement1');
				imgElement1.append(img);
			}else{
				var img2 = document.createElement('img');
				img2.src = ("images/" + hand['rank'] + hand['suit'] + ".png");

				console.log(img2,'img2');
				imgElement2.append(img2);
			};
			
			//img2.src = ("images/" + cards[1]['ranks'] + cards[1]['suits'] + ".png");
			// cardOutput[i].innerText = hand['rank'] + ' of ' + hand['suit']; //that hand variable is calling the play-hand function of the player class.
			currentCards[i] = hand; // shows the face-up diplayed card that was played.
		}; // loops through each player, has each player draw a card, and then outputs the value to the html interface, then stores the card that they drew into the current cards array.
		//currentCards = [{'suit': 'Hearts', 'rank': '8', 'value': 8},{'suit': 'Spades', 'rank': '8', 'value': 8}];
		//console.log('reset current cards to for war',8,8);
	} else{ // IF WE GO TO WAR...
		console.log('draw for war');
		for (var k = 0; k <2; k++){ //for loop, looping through the amount of outputs we have (which is equal to the amount of players(2)).
			console.log('enter draw for war for loop');
			console.log(k, 'k for war draw for loop');
			console.log(players[k]);
			var hand = players[k].playHandForWar(players[k]); //takes the whole player, breaks out the deck inside the function, then deals 4 cards.
			console.log(hand, 'hand for war'); // the hand will be an array of 4 cards. 3 face down, 1 face up.
			
			//need to update card output for images.
			//cardOutput[k].innerHTML = cardOutput[k].innerHTML + '; 3 FACE DOWN CARDS; ' + hand[3]['rank'] + ' of ' + hand[3]['suit']; // text div that outputs the WAR results.
			console.log('set war output',k);
			if (k === 0){ //player1 will have an array of played hand [0-4]. passing those played cards into an array of values 0-7 depending on each player.
                            //the below hand value is representing each card's position within each player's current played hand in the WAR.
				console.log('if k is 0');
				currentCards[0] = hand[0];
				currentCards[1] = hand[1];
				currentCards[2] = hand[2];
				currentCards[3] = hand[3];
				console.log(currentCards, 'check current cards if first player has drawn war');
				console.log(oldCards, 'check old cards if first player has drawn war');
				
				let imgFaceDown1 = document.createElement('img');
				let imgFaceDown2 = document.createElement('img');
				let imgFaceDown3 = document.createElement('img');
				let imgFaceUp1 = document.createElement('img');
				imgFaceDown1.src = ("images/card_back.jpg");
				imgFaceDown2.src = ("images/card_back.jpg");
				imgFaceDown3.src = ("images/card_back.jpg");
				imgFaceUp1.src = ("images/" + hand[3]['rank'] + hand[3]['suit'] + ".png");

				var warElement1 = document.getElementById('war1');
				warElement1.prepend(imgFaceUp1);
				warElement1.prepend(imgFaceDown1);
				warElement1.prepend(imgFaceDown2);
				warElement1.prepend(imgFaceDown3);
				
				
			}else if (k===1){ // player two's cards are in the 8-card array as 4-7, and player1 as 0-3.
				console.log('if k is 1');
				currentCards[4] = hand[0];
				currentCards[5] = hand[1];
				currentCards[6] = hand[2];
				currentCards[7] = hand[3];
				console.log(currentCards, 'check current cards if second player has drawn war');
				console.log(oldCards, 'check old cards if second player has drawn war');
				
				let imgFaceDown4 = document.createElement('img');
				let imgFaceDown5 = document.createElement('img');
				let imgFaceDown6 = document.createElement('img');
				let imgFaceUp2 = document.createElement('img');
				imgFaceDown4.src = ("images/card_back.jpg");
				imgFaceDown5.src = ("images/card_back.jpg");
				imgFaceDown6.src = ("images/card_back.jpg");
				imgFaceUp2.src = ("images/" + hand[3]['rank'] + hand[3]['suit'] + ".png");
				var warElement2 = document.getElementById('war2');
				warElement2.prepend(imgFaceUp2);
				warElement2.prepend(imgFaceDown4);
				warElement2.prepend(imgFaceDown5);
				warElement2.prepend(imgFaceDown6);
			};
			console.log('exit loop for war from draw button');
		};
		
		console.log('exit if statement for draw button');
		console.log(oldCards,'check old cards array after draw if statment');
		if(oldCards.length !== 0){ //if you've gone to war, it will store the tied prev played cards, and move them into the 'take-hands' function.
			console.log('old cards if statement');
			for(var n = 0; n<oldCards.length; n++){
				currentCards.unshift(oldCards[n]); // takes the original 'tied' cards (that triggered the WAR and if they exist previous war cards if war continues), and places them at the beginning the total played cards array so they can be included in the 'taken-cards' when someone wins.
			};
			oldCards = [];
		};
	};

	setTimeout(function(){ //gives you 3 seconds of screen time to see hand, THEN runs the compareHand function to determine results of said hand.
		console.log('try to call compare hand');
		console.log(warElement1, 'war element 1 before comparehand');
		newGame.compareHand(currentCards, players); 
	},3000);
	
	//checkWin(players)
	//setTimeout(function(){
		//newGame.checkWin(players);
	//},8000);
	
});


/* numberButtons.forEach(button => { //loop through each button and add click event listener
	button.addEventListener('click', () => {
		calculator.pushNumber(button.innerText); //add number to input
		calculator.updateDisplay();//udpate output
		
	});
}); */