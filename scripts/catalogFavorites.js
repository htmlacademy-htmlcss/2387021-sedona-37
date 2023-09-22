let buttonsFavorites = document.querySelectorAll('.button-favorites');
let favoriteCounter = document.querySelector('.nav-user-number');

favoriteCounter = Number(favoriteCounter);
console.log(typeof favoriteCounter);

for (let buttonFavorites of buttonsFavorites) {
buttonFavorites.onclick = function() {
  buttonFavorites.classList.toggle('button-favorites-current');
  if (buttonFavorites.classList.contains('button-favorites-current')) {
    buttonFavorites.textContent = 'В избранном';
    favoriteCounter.textContent += 1;
  } else {
      buttonFavorites.textContent = 'В избранное';
      favoriteCounter.textContent -= 1;
    }
};
}
