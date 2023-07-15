let buttonsFavorites = document.querySelectorAll('.button-favorites');

for (let buttonFavorites of buttonsFavorites) {
buttonFavorites.onclick = function() {
  buttonFavorites.classList.toggle('button-favorites-current');
  if (buttonFavorites.classList.contains('button-favorites-current')) {
    buttonFavorites.textContent = 'В избранном';
  } else {
      buttonFavorites.textContent = 'В избранное';
    }
};
}
