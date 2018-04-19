document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://api.punkapi.com/v2/beers';
  makeRequest(url, requestComplete);
});

const makeRequest = function (url, callback) {
  const request = new XMLHttpRequest();
  request.open('GET', url);
  request.send();

  request.addEventListener('load', callback);
}
const requestComplete = function() {
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const beers = JSON.parse(jsonString);
  createBeerList(beers);
}

const createBeerList = function (beers) {
  beers.forEach((beer) => {
    displayBeerList(beer);
  });
}

const displayBeerList = function (beer) {
  const ul = document.querySelector('#beer-list')
  const li = document.createElement('li');
  li.textContent = beer.name;
  ul.appendChild(li);
  const pic = document.createElement('img');
  pic.src = beer.image_url;
  ul.appendChild(pic);
}


// const ingredients = document.createElement('li');
// ingredients.textContent = beer.ingredients.malt;
// ul.appendChild(ingredients);
