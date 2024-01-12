/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes to randomly choose from
const quotes = [{source: 'Albert Einstein', quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."},
                {source: 'Bernard M. Baruch', quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."},
                {source: 'Mae West', quote: 'You only live once, but if you do it right, once is enough.'},
                {source: 'Martin Luther King Jr.', quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.'},
                {source: 'Ralph Waldo Emerson', quote: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'},
                {source: 'Judy Garland', quote: 'Toto, I\'ve a feeling we\'re not in Kansas anymore.', citation: 'The Wizard of Oz', year: '1939'},
                {source: 'Hans Solo(Harrison Ford)', quote:'May the force be with you', citation: 'Star Wars', year: '1977'},
                {source: 'Cuba Gooding Jr.', quote:'Show me the money!', citation: 'Jerry Maguire', year: '1996'}];


// Creates a random quote
function GetRandomQuote() {
      const randomNumber = Math.floor( Math.random() * quotes.length );
      const quote = quotes[randomNumber]
      return quote;
}


// Changes the background randomly by getting a random numberfor the r, g, and b in the rgb color
function getRandomColor() {
    let r = Math.floor( Math.random() * 256 );
    let g = Math.floor( Math.random() * 256 );
    let b = Math.floor( Math.random() * 256 );
    let rgb = [r, g, b];
    document.querySelector("body").attributeStyleMap.set("background-color", `rgb(${rgb.join(', ')})`); 
}
// Function calls background color change, creates the html, and adds citation and year if exist
function printQuote() {
      getRandomColor();
      let quote = GetRandomQuote();
      let html = `<p class="quote">${quote.quote}</p>
                  <p class="source">${quote.source}</p>`
      if (quote.citation) {
          html += `<span class="citation">${quote.citation}</span>`;
      }
      if (quote.year) {
          html += `<span class="year">${quote.year}</span>`;
      }
      html += '</p>';
      document.getElementById('quote-box').innerHTML = html;
      
}
// Auto refreshes quote and background color 
const autoQuote = setInterval(printQuote, 7000);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
