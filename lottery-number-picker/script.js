// array that keeps track of the numbers
let numberArray = []; // max length of 6

// function for picking numbers, push them into the array and then sort the array
function addLotteryNumber() {
  // get a random integer between 1 and 49
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  const number = getRandomIntInclusive(1, 49);

  // push the number to the array
  numberArray.push(number);

  // sort the array in ascending order
  numberArray.sort((a, b) => {
    return a - b;
  });
}

// addLotteryNumber();
// addLotteryNumber();
// addLotteryNumber();
// addLotteryNumber();
// addLotteryNumber();
// addLotteryNumber();
// console.log(numberArray);

//function for rendering the array in the DOM
function renderNumbers() {
  document.body.querySelector("main").innerHTML = "";
  numberArray.forEach((element) => {
    console.log(element);
    const newNumberDiv = document.createElement("div");
    const newNumber = document.createTextNode(element);
    newNumberDiv.appendChild(newNumber);
    newNumberDiv.classList.add("lottery-number");
    document.body.querySelector("main").appendChild(newNumberDiv);
  });
}

renderNumbers();

// function for resetting the numbers

// function for saving the numbers

// event listener for the pick random number button
const pickButton = document.body.querySelector("#pick-button");
pickButton.addEventListener("click", () => {
  if (numberArray.length < 6) {
    addLotteryNumber();
  }

  renderNumbers();
});

// event listener for the reset button
