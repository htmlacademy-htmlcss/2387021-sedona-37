let buttonSearch = document.querySelector('.button-search');
let modalContainer = document.querySelector('.modal-container');
let modalCloseButton = document.querySelector('.modal-close-button');

buttonSearch.onclick = function() {
  modalContainer.classList.remove('modal-closed');
};

modalCloseButton.onclick = function() {
  modalContainer.classList.add('modal-closed');
};
