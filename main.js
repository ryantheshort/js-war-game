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
		 this.players = [];
	 };
	 
	 start(playerOneName, playerTwoName){
		 this.players.push(new Player(playerOneName));
		 this.players.push(new Player(playerTwoName));
		 let newDeck = new Deck();
		 let crtDeck = newDeck.createDeck();
		 let shuffDeck = newDeck.shuffleDeck(crtDeck);
		 return [this.players, shuffDeck];
	 };
	 
	 deal(players, deck){
		 for(var i = 0; i < deck.length; i = i+2){
			 this.players[0].playerCards.push(deck[i]);
			 this.players[1].playerCards.push(deck[i+1]);
		 };
		 return [players[0], players[1]];
	 };
	 
	 
	 compareHand(cards, players){
		 console.log('compare hand has been called');
		 const numOfCards = cards.length;
		 console.log(numOfCards, 'number of cards during compare');
		 var p1val, p2val;
		 if (numOfCards === 2){
			 console.log('if 2 is num of cards');
			 console.log(cards[0]['value']);
			 p1val = cards[0]['value'];
			 p2val = cards[1]['value'];
		 }else{
			 console.log('if more than two cards');
			 p1val = cards[3]['value'];
			 p2val = cards[7]['value'];
		 };

		 //p1val = 5;
		 //p2val = 5;
		 console.log(p1val, p2val);
		 if(p1val > p2val){
			userInstruction.innerHTML = players[0].playerName + ' has won the hand.';
			players[0].takeCards(players[0], cards);
			warCheck = false;
		 }else if (p2val > p1val){
			userInstruction.innerHTML = players[1].playerName + ' has won the hand.'
			players[1].takeCards(players[1], cards);
			warCheck = false;
		 }else if (p1val === p1val){
			userInstruction.innerHTML = 'Players have tied, this means WAR!';
			console.log(cards[0], cards[1]);
			warCheck = true;
			newGame.war();
			oldCards = cards;
		 };
	 };
	 
	 war(){
		 console.log('war has been called');
		 setTimeout(function(){
			userInstruction.innerHTML = 'Click DRAW to play WAR!';
		 },2500);
		
/* 		 var newCards = [];
		 var saveHand = [];
		 const numOfCards = cards.length;
		 if (numOfCards === 2){
			const p1val = cards[0]['value'];
			const p2val = cards[1]['value'];
		 }else{
			 const p1val = cards[1]['value'];
			 const p2val = cards[3]['value'];
		 }; */
		 //const p1val = 5;
		 //const p2val = 5;
		/*  console.log(p1val, p2val);
		 var p1pos = 1;
		 var p2pos = 3;
		 while (p2val === p1val){
			console.log('while loop');
			 for (var i = 0; i < players.length; i++){
				 console.log('entered for loop');
				 console.log(players.length, 'player array length');
				 newCards=players[i].playHandForWar(players[i]);
				 console.log(newCards[0]['rank'], 'rank');
				 for (var j=0; j< newCards.length; j++){
					 saveHand.push(newCards[j]);
				 };
				 console.log(saveHand, 'saveHand array');
				 console.log(p1pos,'p1pos');
				 console.log(i,'i');
				 if(i===0){
					 warOutput[i].innerHTML = 'FACE DOWN CARD; ' + saveHand[p1pos]['rank'] + ' of ' + saveHand[p1pos]['suit'];
				 } else if (i===1){
					 warOutput[i].innerHTML = 'FACE DOWN CARD; ' + saveHand[p2pos]['rank'] + ' of ' + saveHand[p2pos]['suit'];
				 };
			 };
			 console.log(p1pos, 'player 1 pos');
			 console.log(saveHand[1]['value'], 'save hand 1 value');
			 var p1FaceUpVal = saveHand[p1pos]['value'];
			 var p2FaceUpVal = saveHand[p2pos]['value'];

			 if(p1FaceUpVal > p2FaceUpVal){
				userInstruction.innerHTML = players[0].playerName + ' has won the hand.';
				saveHand.push(cards);
				players[0].takeCards(players[0], saveHand);
				break;
			}else if (p1FaceUpVal <  p2FaceUpVal){
				userInstruction.innerHTML = players[1].playerName + ' has won the hand.';
				saveHand.push(cards);
				players[1].takeCards(players[1], saveHand);
				break;
			}else if (p1FaceUpVal === p2FaceUpVal){
				userInstruction.innerHTML = 'Players have tied, continue WAR!';
				p1val = p1FaceUpVal;
				p2val = p2FaceUpVal
			};
			p1pos = p1pos+4;
			p2pos = p2pos+4;
		 }; */
		 
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
	 
	 takeCards(player, cards){
		 console.log('take cards has been called');
		 for(var i = 0; i < cards.length; i++){
			 console.log(cards[i], 'take card');
			 player.playerCards.unshift(cards[i]);
		 };
		 setTimeout(function(){
			userInstruction.innerHTML = 'Click DRAW to play the next hand.';
			cardOutput[0].innerText = '';
			cardOutput[1].innerText = '';
			//warOutput[0].innerText = '';
			//warOutput[1].innerText = '';
		 },3000); 
	 };
	 
 };
 
 class Deck {
	 constructor () {
		 this.cards=[];
	 };
	 
	 createDeck(){
		 let suits = ['Clubs','Diamonds','Hearts','Spades'];
		 let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King','Ace'];
		 let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14];
		 
		 for (var i = 0; i < suits.length; i++){
			 for(var j = 0; j < ranks.length; j++){
				 this.cards.push(new Card(suits[i], ranks[j], values[j]));
			 };
		 };
		 return this.cards;
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

const newGame = new Game();
const startGame = newGame.start('Ryan','Challenger');
var players = newGame.deal(startGame[0],startGame[1]);
var currentCards = [];
var oldCards = [];
var warCheck = false;
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
const userInstruction = document.querySelector('[data-instruction]');
const p1DeckImage = document.querySelector('[data-p1-deck]');
const p2DeckImage = document.querySelector('[data-p2-deck]');

drawButton.addEventListener('click', button => {
	//function to remove a card from the player's deck and display data for the card that was removed
	console.log('draw button clicked');
	console.log(warCheck);
	if (!warCheck){
		for (var i = 0; i < cardOutput.length; i++){
			//console.log(dealGame[i]);
			//console.log(dealGame[i].playerCards);
			var hand = players[i].playHand(players[i].playerCards);
			//console.log(hand['suit']);
			cardOutput[i].innerText = hand['rank'] + ' of ' + hand['suit'];
			currentCards[i] = hand;
		};
	} else{
		console.log('draw for war');
		for (var k = 0; k <warOutput.length; k++){
			console.log('enter draw for war for loop');
			console.log(k, 'k for war draw for loop');
			console.log(players[k]);
			var hand = players[k].playHandForWar(players[k]);
			console.log(hand, 'hand for war');
			warOutput[k].innerText = '3 FACE DOWN CARDS; ' + hand[3]['rank'] + ' of ' + hand[3]['suit'];
			if (k === 0){
				console.log('if k is 0');
				currentCards[0] = hand[0];
				currentCards[1] = hand[1];
				currentCards[2] = hand[2];
				currentCards[3] = hand[3];
			}else if (k===1){
				console.log('if k is 1');
				currentCards[4] = hand[0];
				currentCards[5] = hand[1];
				currentCards[6] = hand[2];
				currentCards[7] = hand[3];
			};
		};
		if(oldCards.length !== 0){
			for(var n = 0; n<oldCards.length; n++){
				currentCards.push(oldCards[n]);
			};
		};
	};
	setTimeout(function(){
		newGame.compareHand(currentCards, players);
	},3000);
	
	//checkWin(players)
	setTimeout(function(){
		newGame.checkWin(players);
	},8000);
	
});


/* numberButtons.forEach(button => { //loop through each button and add click event listener
	button.addEventListener('click', () => {
		calculator.pushNumber(button.innerText); //add number to input
		calculator.updateDisplay();//udpate output
		
	});
}); */