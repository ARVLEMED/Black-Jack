// //function startGame
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

let deck, playerHand, dealerHand, playerScore, dealerScore, gameActive;

const playerCardsDiv = document.getElementById('player-cards');
const dealerCardsDiv = document.getElementById('dealer-cards');
const playerScoreDiv = document.getElementById('player-score');
const dealerScoreDiv = document.getElementById('dealer-score');
const resultDiv = document.getElementById('result');

document.getElementById('start').addEventListener('click', startGame);
document.getElementById('hit').addEventListener('click', playerHit);
document.getElementById('stand').addEventListener('click', dealerTurn);

function startGame() {
    deck = createDeck();
    shuffleDeck(deck);
    playerHand = [drawCard(), drawCard()];
    dealerHand = [drawCard(), drawCard()];
    playerScore = calculateScore(playerHand);
    dealerScore = calculateScore(dealerHand);
    gameActive = true;

    updateUI();
    resultDiv.textContent = '';
}
// function Hit
// function stand
// // fucntion split 