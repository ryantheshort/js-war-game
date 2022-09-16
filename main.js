'use strict';

//create a card game using rules for War

//The goal is to be the first player to win all 52 cards

//THE DEAL
//The deck is divided evenly, with each player receiving 26 cards, dealt one at a time, face down. Anyone may deal first. Each player places their stack of cards face down, in front of them.

//THE PLAY
//Each player turns up a card at the same time and the player with the higher card takes both cards and puts them, face down, on the bottom of his stack.

//If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards). If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.

//HOW TO KEEP SCORE
//The game ends when one player has won all the cards.



// constructor = A special method for assigning properties.
//automatically called when creating an object.

class Game {
    //constructor
    constructor();

}

class Player {
    //constructor
    constructor(name) {
        this.name = name;
    }

    }




class Deck {
    //constructor
    constructor() {
        this.deck = [];
        // CREATE SUITS of Cards

        const suits = ['spades', 'hearts', 'clubs', 'diamonds'];
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King,', 'Ace'];
    }
    


}

class Card {
    //constructor
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    //deck of cards
// fiftyTwoCardDeck = [['Spades',2],
// ['Spades',3],
// ['Spades',4],
// ['Spades',5],
// ['Spades',6],
// ['Spades',7],
// ['Spades',8],
// ['Spades',9],
// ['Spades',10],
// ['Spades',11],
// ['Spades',12],
// ['Spades',13],
// ['Spades',14],
// ['hearts',2],
// ['hearts',3],
// ['hearts',4],
// ['hearts',5],
// ['hearts',6],
// ['hearts',7],
// ['hearts',8],
// ['hearts',9],
// ['hearts',10],
// ['hearts',11],
// ['hearts',12],
// ['hearts',13],
// ['hearts',14],
// ['clubs',2],
// ['clubs',3],
// ['clubs',4],
// ['clubs',5],
// ['clubs',6],
// ['clubs',7],
// ['clubs',8],
// ['clubs',9],
// ['clubs',10],
// ['clubs',11],
// ['clubs',12],
// ['clubs',13],
// ['clubs',14],
// ['diamonds',2],
// ['diamonds',3],
// ['diamonds',4],
// ['diamonds',5],
// ['diamonds',6],
// ['diamonds',7],
// ['diamonds',8],
// ['diamonds',9],
// ['diamonds',10],
// ['diamonds',11],
// ['diamonds',12],
// ['diamonds',13],
// ['diamonds',14]];

}

// CREATE PLAYERS

const player1 = new Player('Ryan');
const player2 = new Player('Challenger');

//CREATE DECK
const deck1 = new Deck();
//console.log(deck1.deck);