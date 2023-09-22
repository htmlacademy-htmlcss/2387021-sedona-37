// let minusButtons = Array.from(document.querySelectorAll('.button-minus'));
// let plusButtons = Array.from(document.querySelectorAll('.button-plus'));
// let quantityInputs = Array.from(document.querySelectorAll('.quantity-input'));

let minusButtons = document.querySelectorAll('.button-minus');
let plusButtons = document.querySelectorAll('.button-plus');
let quantityInputs = document.querySelectorAll('.quantity-input');

minusButtons[0].onclick = function () {
  if (quantityInputs[0].value < 1) {
    quantityInputs[0].value = quantityInputs[0].value;
  } else {
    quantityInputs[0].value--;
  }
};

minusButtons[1].onclick = function () {
  if (quantityInputs[1].value < 1) {
    quantityInputs[1].value = quantityInputs[1].value;
  } else {
    quantityInputs[1].value--;
  }
};

plusButtons[0].onclick = function () {
  quantityInputs[0].value++;
};
plusButtons[1].onclick = function () {
  quantityInputs[1].value++;
};


// for (let minusButton of minusButtons) {
//   for (let quantityInput of quantityInputs) {
//     minusButton.onclick = function () {
//       if (quantityInput.value < 1) {
//         quantityInput.value = quantityInput.value;
//       } else {
//         quantityInput.value--;
//       }
//     };
//   }
// }


// for (let plusButton of plusButtons) {
//   for (let quantityInput of quantityInputs) {
//     plusButton.onclick = function () {
//       quantityInput.value++;
//     }
//   }
// }
