async function fetchNumberFacts() {
    const favoriteNumber = 42; // Replace with your favorite number
    
    // Array to store the fetched facts
    const facts = [];
    
    // Make multiple requests to the API and store the facts
    for (let i = 0; i < 4; i++) {
        const response = await fetch(`http://numbersapi.com/${favoriteNumber}/trivia?json`);
        const data = await response.json();
        facts.push(data.text);
    }
    
    // Display the facts on the page
    const factsContainer = document.getElementById('number-facts'); // Replace with the ID of the container element
    facts.forEach((fact) => {
        const factElement = document.createElement('p');
        factElement.textContent = fact;
        factsContainer.appendChild(factElement);
    });
}

// Call the fetchNumberFacts function to retrieve and display the number facts
fetchNumberFacts();





