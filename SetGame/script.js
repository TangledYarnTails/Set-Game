// 81 objects(cards)
let deck =[
  {
    shape: "lay",
    pattern: "solid",
    color: "brown",
    number: 1,
    name: "one"
  }
];
let selectedCards =[] //3 cards that were clicked on
let board = []; //12 or 15 cards on the board (3x4 grid)
let takenCards =[]; // cards that were verified that are no longer playable
let points; // player's points, 1 set = 1 point, 1 wrong set = -1point
let initial = true; // initial deal is 12 cards, otherwise just 3

function dealCards(){
let x = 0;
    if(initial == true){
//take a random index from the deck 12 times and add it to the board array
let chosen;
while(x > 12){
    chosen = (int)(Math.random() * deck.length )
board.push(deck[chosen]) //random index values from 0 to 81
deck.splice(chosen, 1) // removes one random object from the deck
initial = false;
console.log("Currently on the board: " + board)
console.log("Deck Length: " + deck.length)
x++;
}

}else{
//take a random index from the deck 3 times and add it to the board array
while(x > 3){
chosen = (int)(Math.random() * deck.length )
board.push(deck[chosen]) //random index values from 0 to 81
deck.splice(chosen, 1) // removes one random object from the deck
console.log("Currently on the board: " + board)
console.log("Deck Length: " + deck.length)
x++;
}
}
};

function setsInBoard(){
// is there at least one possible set on the board?
if(){

}else{
    dealCards();
}
// if no then deal cards
};
function getCard(card) { // returns if the card selected is on the board
return board.includes(Card.name);
}
function verifySet(){
//compare all three cards to each other
// consider each characteristic one at a time
//if two share a characteristic and the last one does not then it is not a set

if (
    selectedCards[0].shape == selectedCards[1].shape && selectedCards[0].shape != selectedCards[2].shape ||
    selectedCards[0].pattern == selectedCards[1].pattern && selectedCards[0].pattern != selectedCards[2].pattern ||
    selectedCards[0].color == selectedCards[1].color && selectedCards[0].color != selectedCards[2].color ||
    selectedCards[0].number == selectedCards[1].number && selectedCards[0].number != selectedCards[2].number

)
    {
    points-= 1;
    console.log("NOT a set");
} else{
    console.log("this IS a set");
    points+=1;
    let i =0
    while( i < 3){
       takenCards.push(selectedCards[i])
       selectedCards = [];
       board.filter(getCard(selectedCards[i]))
       board.splice(0,1);
       console.log("this is the current board:"+ board)
        i++;
    }
    if(board.length < 15 && deck.length > 2){
    dealCards();
    }

}

};