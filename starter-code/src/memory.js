var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.constructor = MemoryGame;

MemoryGame.prototype.shuffleCards = function(cards) {
  
  var m = this.cards.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = this.cards[m];
    this.cards[m] = this.cards[i];
    this.cards[i] = t;
  }

  return cards;

};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {

  this.pairsClicked = 1;

  if (firstCard === secondCard){
    this.pairsGuessed = 1;
    return true;
  }else{
    return false;
  }

};

MemoryGame.prototype.isFinished = function() {

  if (this.pairsGuessed === 8){
    return true;
  }else{
    return false;
  }
};
