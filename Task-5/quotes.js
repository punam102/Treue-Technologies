
let currentQuoteIndex = 0;

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  displayQuote();
}

function displayQuote() {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  quoteElement.textContent = quotes[currentQuoteIndex].quote;
  authorElement.textContent = `- ${quotes[currentQuoteIndex].author}`;
}

// Display the initial quote
displayQuote();
