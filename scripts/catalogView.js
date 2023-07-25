let cardTile = document.querySelector('.card-tile');
let cardBigList = document.querySelector('.card-big-list');
let cardList = document.querySelector('.card-list');
let hotelCards = document.querySelector('.hotel-cards-list');

cardTile.onclick = function () {
  cardTile.classList.add('card-current');
  cardBigList.classList.remove('card-current');
  cardList.classList.remove('card-current');
  hotelCards.classList.remove('big-list');
  hotelCards.classList.remove('list');
}

cardBigList.onclick = function () {
  cardTile.classList.remove('card-current');
  cardBigList.classList.add('card-current');
  cardList.classList.remove('card-current');
  hotelCards.classList.add('big-list');
  hotelCards.classList.remove('list');
}

cardList.onclick = function () {
  cardTile.classList.remove('card-current');
  cardBigList.classList.remove('card-current');
  cardList.classList.add('card-current');
  hotelCards.classList.add('list');
  hotelCards.classList.remove('big-list');
}
