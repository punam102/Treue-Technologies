const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".name"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.querySelector(".twitter"),
synth = speechSynthesis;

let currentQuoteIndex = 0; // Variable to keep track of the current quote index
let quotesData = null; // Variable to store the JSON data

function randomQuote(){
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
  
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      quotesData = data; // Store the data in the quotesData variable
      updateQuote();
      quoteBtn.classList.remove("loading");
      quoteBtn.innerText = "New Quote";
    })
    .catch(error => {
      console.error("Error fetching data:", error);
    });
}

function updateQuote() {
  const quote = quotesData[currentQuoteIndex];

  if (quote) {
    quoteText.innerText = quote.content;
    authorName.innerText = quote.author;

    // Increment the index for the next quote, and reset to 0 if it goes beyond the array length
    currentQuoteIndex = (currentQuoteIndex + 1) % quotesData.length;
  }
}

speechBtn.addEventListener("click", () => {
  if (!quoteBtn.classList.contains("loading")) {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    synth.speak(utterance);
    setInterval(() => {
      !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
    }, 10);
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);

// Call randomQuote to load the initial quote
randomQuote();
