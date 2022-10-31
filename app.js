console.log("connected");



const quoteButton = document.getElementById("quoteButton");
const quote = document.getElementById("quote");


const selectedQuote = async ()=> {
    const urlToFetch = "https://type.fit/api/quotes";
    let quotes;
    try{
      const response = await fetch(urlToFetch);
      if (response.ok){
        quotes = await response.json();
      }

    }catch(error){
      console.log(error);
    }

    let selection =  Math.floor(Math.random() * quotes.length);
    let randomQuote = quotes[selection];
    quote.innerHTML = randomQuote.text + "<br><br> by " + randomQuote.author;
    
};




quoteButton.addEventListener("click", selectedQuote);




