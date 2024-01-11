
class Card{
   constructor(rank, suit, value){
    this.rank = rank;
    this.suit = suit;
    this.value =value;
}


}


class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.cards = [];
    }
    displayPlayer(){
        console.log(this.name + " \nScore: " + this.score + " \nCards: " + this.cards)
    }

}

class Deck {
    constructor(){
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "King"
        ];
        this.suits = ["Hearts","Diamonds", "Spades", "Clubs"];
    }

    createDeck(){
        for (var j = 0; j < this.suits.length; j++){
            for (var i = 0; i < this.ranks.length; i++){
                var rank = this.ranks[i];
                var value = i+1;
                var suit  = this.suits[j];
                this.deck.push(new Card(rank, suit, value));
            }

        }
    }

    displayDeck(){
        for (var card of this.deck){
            console.log("Card: "+ card.rank +" " + card.suit );
        }
    }

    shuffleDeck(){
        for (let i = this.deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];

        }
    }

    
}


class Game {

    constructor(){
        this.player1 = new Player('Player 1');
        this.player2 = new Player('Player 2');

    }
startGame(){
        var deck = new Deck(); 
        deck.createDeck();  // create new deck
        deck.shuffleDeck(); // shuffle the deck
        
        // giving cards to players
        while(deck.deck.length != 0){
            this.player1.cards.push(deck.deck.shift());
            this.player2.cards.push(deck.deck.shift());   
        }

        //starting actual game
        while (this.player1.cards.length != 0 || this.player2.cards.length != 0){
            let value1 = this.player1.cards[0].value;
            let value2 = this.player2.cards[0].value;
            //show each player's cards
            console.log("card 1:" + value1);
            console.log("card 2: " + value2)
            //removing open cards 
            this.player1.cards.shift();
            this.player2.cards.shift();
            //compare cards'values and add poit to winning palyer
            if(value1 > value2){
                this.player1.score ++;
                console.log("Player 1 gets a point");
    
            } else if(value1 < value2){
                this.player2.score++;
                console.log("Player 2 gets a point");
            }
            console.log("Score \nPlayer 1: "+ this.player1.score + "\nPlayer 2: " + this.player2.score); //display current score
        }
        console.log("Final scores: player 1: " + this.player1.score + " player 2: " + this.player2.score);  //display  final score
    
        //check a winner
        if(this.player1.score > this.player2.score){
            console.log("Congratulations Player 1! YOU WON!!!");
        } else if(this.player2.score > this.player1.score){
            console.log("Congratulations Player 2! YOU WON!!!");
        } else{
            console.log("IT'S A TIE!!!");
        }  
    }

}

var game = new Game();
game.startGame();

