// select the counter display and set it to zero
let counter = 0;
const counterDisplay = document.querySelector("main");
counterDisplay.textContent = counter;

function incrementCounter() {
  if (counter < 99) {
    counter++;
    counterDisplay.textContent = counter;
    document.body.style.setProperty("--background-border", counter + "%");
  } else {
    counter = 0;
    counterDisplay.textContent = counter;
    document.body.style.setProperty("--background-border", counter + "%");
  }
}

// adds event listeners for clicks
counterDisplay.addEventListener("click", () => {
  incrementCounter();
});

// adds event listener for the enter and space key
document.addEventListener("keydown", (event) => {
  if (event.code == "Space") {
    incrementCounter();
  } else if (event.code == "Enter") {
    incrementCounter();
  }
});

// reset button
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function () {
  counter = 0;
  counterDisplay.textContent = counter;
  document.body.style.setProperty("--background-border", counter + "%");
});
