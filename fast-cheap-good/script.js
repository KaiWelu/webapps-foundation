function checkTheBoxes() {
  const checked = document.querySelectorAll("input[type='checkbox']:checked");
  return checked.length === 3;
}

let lastBox;

document.body.addEventListener("change", (event) => {
  if (checkTheBoxes() === true) {
    lastBox.checked = false;
  }
  lastBox = event.target;
});

// legacy code after this -->

// select the checkboxes
// const buttonFast = document.querySelector("#button-fast");
// const buttonCheap = document.querySelector("#button-cheap");
// const buttonGood = document.querySelector("#button-good");

// let count = 0;
// // look up wich boxes are checked
// if (buttonFast.checked === true) {
//   count++;
// }
// if (buttonCheap.checked === true) {
//   count++;
// }
// if (buttonGood.checked === true) {
//   count++;
// }

// if (count < 3) {
//   return false;
// } else {
//   return true;
// }

// // add eventlisteners
// buttonFast.addEventListener("click", () => {
//   if (checkTheBoxes() === true) {
//     lastBox.checked = false;
//   }
//   lastBox = buttonFast;
// });

// buttonCheap.addEventListener("click", () => {
//   if (checkTheBoxes() === true) {
//     lastBox.checked = false;
//   }
//   lastBox = buttonCheap;
// });

// buttonGood.addEventListener("click", () => {
//   if (checkTheBoxes() === true) {
//     lastBox.checked = false;
//   }
//   lastBox = buttonGood;
// });
