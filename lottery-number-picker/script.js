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
  //make it unique
  if (numberArray.includes(number) === true) {
    number = getRandomIntInclusive(1, 49);
  }

  // push the number to the array
  numberArray.push(number);

  // sort the array in ascending order
  numberArray.sort((a, b) => {
    return a - b;
  });
}

//function for rendering the array in the DOM
function renderNumbers() {
  document.body.querySelector("main").innerHTML = "";
  numberArray.forEach((element) => {
    const newNumberDiv = document.createElement("div");
    const newNumber = document.createTextNode(element);
    newNumberDiv.appendChild(newNumber);
    newNumberDiv.classList.add("lottery-number");
    document.body.querySelector("main").appendChild(newNumberDiv);
  });
}

// function for saving the numbers
function saveToLocal() {
  localStorage.setItem("numberArray", JSON.stringify(numberArray));
}

// event listener for the pick random number button
const resetButton = document.body.querySelector("#reset-button");
const pickButton = document.body.querySelector("#pick-button");

pickButton.addEventListener("click", () => {
  if (numberArray.length < 5) {
    addLotteryNumber();
    resetButton.classList.remove("header-button-greyed");
    resetButton.classList.add("header-button");
  } else if (numberArray.length < 6) {
    addLotteryNumber();
    pickButton.classList.remove("header-button");
    pickButton.classList.add("header-button-greyed");
  }
  renderNumbers();
  saveToLocal();
});

// event listener for the reset button
resetButton.addEventListener("click", () => {
  if (numberArray.length !== 0) {
    numberArray.length = 0;
    pickButton.classList.remove("header-button-greyed");
    pickButton.classList.add("header-button");
    resetButton.classList.remove("header-button");
    resetButton.classList.add("header-button-greyed");
    renderNumbers();
  }
  localStorage.clear();
});

// let localOutput = JSON.parse(localStorage.getItem("numberArray"));
// console.log(localOutput);
// console.log(localStorage.getItem("numberArray"));

if (localStorage.getItem("numberArray") !== null) {
  numberArray = JSON.parse(localStorage.getItem("numberArray"));
  resetButton.classList.remove("header-button-greyed");
  resetButton.classList.add("header-button");
  renderNumbers();
}
