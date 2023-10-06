const quotes = [
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh"
    }
];

let currentQuoteIndex = 0;

function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    displayQuote();
}

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    
    quoteElement.textContent = quotes[currentQuoteIndex].quote;
    authorElement.textContent = `- ${quotes[currentQuoteIndex].author}`;
}

// Display the initial quote
displayQuote();
