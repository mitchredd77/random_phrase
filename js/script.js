/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

const quotes = [{source: 'Albert Einstein', quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."},
                {source: 'Bernard M. Baruch', quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."},
                {source: 'Mae West', quote: 'You only live once, but if you do it right, once is enough'},
                {source: 'Martin Luther King Jr.', quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that'},
                {source: 'Ralph Waldo Emerson', quote: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”'}]



function GetRandomQuote() {
      const randomNumber = Math.floor( Math.random() * quotes.length );
      const quote = quotes[randomNumber]
      return quote;
};


function getRandomColor() {
    let r = Math.floor( Math.random() * 256 );
    let g = Math.floor( Math.random() * 256 );
    let b = Math.floor( Math.random() * 256 );
    let rgb = [r, g, b];
    document.querySelector("body").attributeStyleMap.set("background-color", `rgb(${rgb.join(', ')})`); 
}
function printQuote() {
      getRandomColor();
      let quote = GetRandomQuote();
      let html = `<h1>${quote.quote}</h1>
              <p> by: ${quote.source}</p>`;
      document.getElementById('quote-box').innerHTML = html;
      
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
