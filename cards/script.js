// let deckCreator = {
//   deck: [],
//   suits: ["Spades", "Hearts", "Clubs", "Diamonds"],
//   values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
//   makeDeck() {
//     const { deck, suits, values } = this;
//     for (let card of values.split(",")) {
//       for (let suit of suits) {
//         deck.push({ suit, card });
//       }
//     }
//   },
//   drawCard() {
//     return this.deck.splice(Math.floor(Math.random() * this.deck.length), 1)[0];
//   }
// };

// deckCreator.makeDeck();

// button.addEventListener("click", () => {
//   let arr = [];
//   let cardDrawn = deckCreator.drawCard();
//   for (let key in cardDrawn) {
//     arr.push(cardDrawn[key]);
//   }
//   card.innerHTML = `${arr[1]} of ${arr[0]}`;
// });

// let namesList = document.getElementById("namesList");

// let api = "https://swapi.co/api/people/";

// let names;

// fetch(api)
//   .then(res => res.json())
//   .then(data => {
//     let names = data.results;

//     return names.map(result => {
//       let li = document.createElement("li");
//       li.textContent = result.name;
//       namesList.appendChild(li);
//     });
//   });

// fetch(api)
//   .then(res => res.json())
//   .then(data => {
//     let x = data.results;
//     return x.map(result => {
//       let li = document.createElement("li");
//       li.textContent = JSON.stringify(result);
//       showX.appendChild(li);
//     });
//   });

// function makeDeck() {
//   let deck = [];
//   const suit = ["spades", "hearts", "clubs", "diamonds"];
//   const values = "1,2,3,4,5,6,7,8,9,10,J,Q,K,A";

//   for (let value of values.split(",")) {
//     for (let key of suit) {
//       deck.push(`${key} ${value}`);
//     }
//     return deck;
//   }
// }

// let grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

// let maxGrade = grades.reduce((acc, curr) => {
//   return curr > acc ? curr : acc;
// })

// Return random object with value and suit
// function pick(arr) {
//   let id = Math.floor(Math.random() * arr.length);
//   return arr[id];
// }

// function pickMinor() {
//   return Math.floor(Math.random() * 14);
// }

// function pickSuit() {
//   return Math.floor(Math.random() * 4);
// }

// function randomCard() {
//   let majorCard = [
//     "The Fool",
//     "The Magician",
//     "The High Priestess",
//     "The Empress",
//     "The Emperor",
//     "The Hierophant",
//     "The Lovers",
//     "The Chariot",
//     "The Hermit",
//     "Strength",
//     "The Wheel of Fortune",
//     "Justice",
//     "The Hanged Man",
//     "Death",
//     "Temperance",
//     "The Devil",
//     "The Tower",
//     "The Star",
//     "The Moon",
//     "The Sun",
//     "The Judgement",
//     "The World"
//   ];
//   let suit = ["Wands", "Pentacles", "Swords", "Cups"];
//   let minorCard = [
//     "King",
//     "Queen",
//     "Knight",
//     "Page",
//     "Ace",
//     10,
//     9,
//     8,
//     7,
//     6,
//     5,
//     4,
//     3,
//     2
//   ];

//   return {
//     MajorArcana: pick(majorCard),
//     Suit: pick(suit),
//     MinorArcana: pick(minorCard)
//   };
// }

// function panGram(str) {
//   let alpha = "abcdefghijklmnopqrstuvwxyz".split("");

//   return alpha.every(char => str.toLowerCase().includes(char));
// }

// function getAverage(arr) {
//   let num;
//   for (let i in arr) {
//     num += arr[i]
//   }
//   return num / arr.length;
// }

// function isValid(password, userName) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(userName) !== -1
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// }

// isValid("89Fjj1nms", "dogLuvr");
// isValid("dogLuvr123", "dogLuvr");
// isValid("hello1", "dogLuvr");
