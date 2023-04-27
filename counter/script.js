// select the counter display and set it to zero
let counter = 0;
const counterDisplay = document.querySelector("main");
counterDisplay.textContent = counter;

// function to increment the counter
// const counterIncrement = function () {
//   if (counter < 100) {
//     counter++;
//     counterDisplay.textContent = counter;
//   } else {
//     counter = 0;
//     counterDisplay.textContent = counter;
//   }
// };

// adds eventlisteners for clicks and button presses
counterDisplay.addEventListener("click", function () {
  if (counter < 99) {
    counter++;
    counterDisplay.textContent = counter;
  } else {
    counter = 0;
    counterDisplay.textContent = counter;
  }
});

// reset button
