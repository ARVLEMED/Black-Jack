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
const dropdownButton = document.querySelector('.split-dropdown-button');
const splitOptions = document.createElement('div');

splitOptions.innerHTML = `
    <button class="option">Confirm Split</button>
    <button class="option">Cancel Split</button>
`;
splitOptions.style.display = 'none';
splitOptions.classList.add('split-options');

dropdownButton.addEventListener('click', () => {
    splitOptions.style.display = splitOptions.style.display === 'none' ? 'block' : 'none';
});

document.querySelector('.blackjack-split-button').appendChild(splitOptions);
let playerHands = [[]]; 
let currentHandIndex = 0; 


playerHands[0] = [{ rank: '8', suit: 'hearts' }, { rank: '8', suit: 'spades' }];

function splitHand() {
    
    if (playerHands[currentHandIndex].length === 2 && 
        playerHands[currentHandIndex][0].rank === playerHands[currentHandIndex][1].rank) {
        
        
        const splitCard = playerHands[currentHandIndex].pop(); 
        playerHands.push([splitCard]); 

        
        console.log('Hand split! Current hands:', playerHands);
        
    } else {
        console.log('Cannot split this hand.');
    }
}

document.querySelector('.split-main-button').addEventListener('click', () => {
    splitHand();
});
function updateUI() {

    console.log('Update UI with hands:', playerHands);
}


