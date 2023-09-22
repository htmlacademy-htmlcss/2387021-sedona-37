let openButton = document.querySelector('.button-search');
let closeButton = document.querySelector('.modal-close-button');
let modalContainer = document.querySelector('.modal-container');
let modal = document.querySelector('.modal-wrapper');

const animateIn = () => {
  modal.classList.remove('modal-in');
  modal.removeEventListener('animationend', animateIn);
}

const animateOut = () => {
  modal.classList.remove('modal-out');
  modal.removeEventListener('animationend', animateOut);
  modalContainer.classList.add('modal-closed');
}

const modalOpen = () => {
  modal.addEventListener('animationend', animateIn);
  modalContainer.classList.remove('modal-closed');
  modal.classList.add('modal-in');
}

const modalClose = () => {
  modal.addEventListener('animationend', animateOut);
  modal.classList.add('modal-out');
}

openButton.addEventListener('click', modalOpen);
closeButton.addEventListener('click', modalClose);




// const modalView = () => {
//   modalContainer.classList.toggle('modal-closed');
// }

// openButton.addEventListener('click', modalView);
// closeButton.addEventListener('click', modalView);
