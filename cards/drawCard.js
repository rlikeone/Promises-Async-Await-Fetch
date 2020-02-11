const cardGame = {
  api: "",
  deckID: "",
  drawCard: "",
  cardImg: "",
  cardDrawn: "",

  startApi() {
    this.api = "https://deckofcardsapi.com/api/deck/new/shuffle/";
    fetch(this.api)
      .then(res => res.json())
      .then(data => {
        this.deckID = data.deck_id;
        this.drawCard = `https://deckofcardsapi.com/api/deck/${this.deckID}/draw/?count=1`;
      });
  },
  startApi2() {
    fetch(this.drawCard)
      .then(res => res.json())
      .then(card => {
        this.cardImg = card.cards[0].image;
        this.cardDrawn = `${card.cards[0].value} of ${card.cards[0].suit}`;
      });
  },
  startGame: startGame.addEventListener("click", e => {
    cardGame.startApi2();
    showButton.innerHTML = `<button id="button">Draw card</button>`;
    showButton.classList.toggle("hide");
    e.target.classList.add("hide");
  }),
  showButton: showButton.addEventListener("click", () => {
    cardGame.startApi2();
    cardPicked.innerHTML = `${cardGame.cardDrawn}`;
    cardImage.innerHTML = `<img src="${cardGame.cardImg}" />`;
  })
};

window.onload = cardGame.startApi();
