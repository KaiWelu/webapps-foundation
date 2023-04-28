// selects the buttons and value display
const redButton = document.querySelector("#red");
const greenButton = document.querySelector("#green");
const blueButton = document.querySelector("#blue");

const valueDisplay = document.querySelector("#color-display");
const colorSliders = document.querySelector("#range-display");

// converts incoming strings to hex and puts a leading zero in front if needed
function toHex(inputString) {
  let output = "0" + parseInt(inputString).toString(16);
  return output.slice(-2);
}

// this function sets the background color based on the sliders state
function changeBackground() {
  document.body.style.setProperty("--red", redButton.value);
  document.body.style.setProperty("--green", greenButton.value);
  document.body.style.setProperty("--blue", blueButton.value);
}

// sets the initial background
changeBackground();

// displays the initial color value in hex
valueDisplay.textContent =
  "#" +
  toHex(redButton.value) +
  toHex(greenButton.value) +
  toHex(blueButton.value);

// event listener for the hex display
colorSliders.addEventListener("input", () => {
  valueDisplay.textContent =
    "#" +
    toHex(redButton.value) +
    toHex(greenButton.value) +
    toHex(blueButton.value);
});

// event listener for changes in the sliders
colorSliders.addEventListener("input", () => {
  changeBackground();
});

/* LEGACY CODE AFTER THIS */

// this sets the initial background color based on the sliders state
// document.body.style.setProperty("--red", redButton.value);
// document.body.style.setProperty("--green", greenButton.value);
// document.body.style.setProperty("--blue", blueButton.value);

// redButton.addEventListener("input", () => {
//   document.body.style.setProperty("--red", redButton.value);
// });

// greenButton.addEventListener("input", () => {
//   document.body.style.setProperty("--green", greenButton.value);
// });

// blueButton.addEventListener("input", () => {
//   document.body.style.setProperty("--blue", blueButton.value);
// });
