// select the checkboxes
const buttonFast = document.querySelector("#button-fast");
const buttonCheap = document.querySelector("#button-cheap");
const buttonGood = document.querySelector("#button-good");

function checkTheBoxes() {
  let count = 0;
  // look up wich boxes are checked
  if (buttonFast.checked === true) {
    count++;
  }
  if (buttonCheap.checked === true) {
    count++;
  }
  if (buttonGood.checked === true) {
    count++;
  }
  if (count < 3) {
    return false;
  } else {
    return true;
  }
}

let lastBox = null;

// add eventlisteners
buttonFast.addEventListener("click", () => {
  if (checkTheBoxes() === true) {
    lastBox.checked = false;
  }
  lastBox = buttonFast;
});

buttonCheap.addEventListener("click", () => {
  if (checkTheBoxes() === true) {
    lastBox.checked = false;
  }
  lastBox = buttonCheap;
});

buttonGood.addEventListener("click", () => {
  if (checkTheBoxes() === true) {
    lastBox.checked = false;
  }
  lastBox = buttonGood;
});
