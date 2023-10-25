const quotes = [
    {
      text: "Quote 1",
      image: "materials/bacho1.jpg"
    },
    {
      text: "Quote 2",
      image: "materials/bacho2.jpg"
    },
    {
      text: "Quote 3",
      image: "materials/bacho3.jpg"
    },
    {
      text: "Quote 4",
      image: "materials/bacho4.jpg"
    },
    {
        text: "Quote 5",
        image: "materials/bacho5.jpg"
    },
    {
        text: "Quote 6",
        image: "materials/bacho6.jpg"
    },
    {
        text: "Quote 7",
        image: "materials/bacho7.jpg"
    },
    {
        text: "Quote 8",
        image: "materials/bacho8.jpg"
    },
    {
        text: "Quote 9",
        image: "materials/bacho9.jpg"
    },
    {
        text: "Quote 10",
        image: "materials/bacho10.jpg"
    }
  ];
  
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-image").src = quote.image;
}

generateRandomQuote();
document.getElementById("new-quote-btn").addEventListener("click", generateRandomQuote);
