async function fetchSingleCard() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
    const data = await response.json();
    const card = data.cards[0];
    console.log(`${card.value} of ${card.suit}`);
}

// Function to fetch two cards from the same deck
async function fetchTwoCards() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=2');
    const data = await response.json();
    const cards = data.cards;
    console.log(`${cards[0].value} of ${cards[0].suit}`);
    console.log(`${cards[1].value} of ${cards[1].suit}`);
}

// Function to create a new deck and draw cards on button click
async function drawCard() {
    const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const data = await response.json();
    const deckId = data.deck_id;

    const button = document.getElementById('draw-button');
    button.addEventListener('click', async () => {
        const drawResponse = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        const drawData = await drawResponse.json();
        const card = drawData.cards[0];
        const cardContainer = document.getElementById('card-container');
        const cardElement = document.createElement('p');
        cardElement.textContent = `${card.value} of ${card.suit}`;
        cardContainer.appendChild(cardElement);

        if (drawData.remaining === 0) {
            button.disabled = true;
            button.textContent = 'No more cards';
        }
    });
}

// Call the functions to perform the desired actions
fetchSingleCard();
fetchTwoCards();
drawCard();