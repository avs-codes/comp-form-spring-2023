//raw js doesn't have an implementation to shuffle arrays so I used this common coding tool
//called the fisher-yates shuffle. It's just a utility to more efficiently shuffle an array
//https://bost.ocks.org/mike/shuffle/ thanks mike bostock!

function shuffle(array) {
  let m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
//below is justin's template code from the comp form textbook on creating a deck system

// create an array to hold the possible values
let panels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

// create a variable to hold the current position in the deck
let position = 0;

function setup() {
  // shuffle the deck first
  panels = shuffle(panels);

}

setup();

function valueFromDeck() {
  // find the value at the current position in the deck
  let v = panels[position];

  // change the position for next time
  position++;

  // if that was the last value, shuffle and start over from the top
  if (position == panels.length) {
    panels = shuffle([panels]);
    position = 0;
  }

  // return the value
  return v;
}

//here is where my code starts
//first create global constants to hold the divs im putting the different panels in
const strip1 = document.getElementById('strip-1');
const strip2 = document.getElementById('strip-2');
const strip3 = document.getElementById('strip-3');

const comicStripArr = [strip1, strip2, strip3];

function createComicStrip () {

  for (let i = 0; i<3; i++) {
    for (let j = 0; j<3; j++) {
      let currentPanel = document.createElement('img');
      comicStripArr[i].appendChild(currentPanel);
      currentPanel.src = `images/Garfield${valueFromDeck()}.png`;
    }
  }
}

createComicStrip();