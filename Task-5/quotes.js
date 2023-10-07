let quotes; // Variable to store the fetched quotes

fetch("./data.json")
  .then((response) => response.json())
  .then((json) => {
    quotes = json; // Assign fetched quotes to the quotes variable
    displayQuote(); // Display the initial quote once the data is available
  });

let currentQuoteIndex = 0;

function nextQuote() {
  if (quotes) {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    displayQuote();
  }
}


function displayQuote() {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  if (quotes) {
    quoteElement.textContent = quotes[currentQuoteIndex].quote;
    authorElement.textContent = `- ${quotes[currentQuoteIndex].author}`;
  }
}

// Display the initial quote
displayQuote();
