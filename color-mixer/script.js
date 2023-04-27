// selects the buttons and value display
const redButton = document.querySelector("#red");
const greenButton = document.querySelector("#green");
const blueButton = document.querySelector("#blue");

const valueDisplay = document.querySelector("#color-display");
const colorSliders = document.querySelector("#range-display");

valueDisplay.textContent =
  "#" +
  parseInt(redButton.value).toString(16) +
  parseInt(greenButton.value).toString(16) +
  parseInt(blueButton.value).toString(16);

document.body.style.setProperty("--red", redButton.value);
document.body.style.setProperty("--green", greenButton.value);
document.body.style.setProperty("--blue", blueButton.value);

redButton.addEventListener("input", () => {
  document.body.style.setProperty("--red", redButton.value);
});

greenButton.addEventListener("input", () => {
  document.body.style.setProperty("--green", greenButton.value);
});

blueButton.addEventListener("input", () => {
  document.body.style.setProperty("--blue", blueButton.value);
});

colorSliders.addEventListener("input", () => {
  valueDisplay.textContent =
    "#" +
    parseInt(redButton.value).toString(16) +
    parseInt(greenButton.value).toString(16) +
    parseInt(blueButton.value).toString(16);
});
