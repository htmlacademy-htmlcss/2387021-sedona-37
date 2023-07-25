let buttonsMinus = document.querySelectorAll('.button-minus');
let buttonsPlus = document.querySelectorAll('.button-plus');
let quantityInputs = document.querySelectorAll('.quantity-input');

buttonsMinus[0].onclick = function () {
  if (quantityInputs[0].value < 1) {
    quantityInputs[0].value = quantityInputs[0].value;} else {
    quantityInputs[0].value--;
  }
};
buttonsMinus[1].onclick = function () {
  if (quantityInputs[1].value < 1) {
    quantityInputs[1].value = quantityInputs[0].value;} else {
    quantityInputs[1].value--;
  }
};

buttonsPlus[0].onclick = function () {
  quantityInputs[0].value++;
};
buttonsPlus[1].onclick = function () {
  quantityInputs[1].value++;
};
