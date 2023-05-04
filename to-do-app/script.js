class Todo {
  constructor(id, description, checked) {
    this.id = id;
    this.description = description;
    this.checked = checked;
  }
}

let stateObject = {
  filter: "all",
  entries: [],
};

function isDuplicate(input) {
  if (
    stateObject.entries.find((element) => element.description === input) !==
    undefined
  ) {
    return true;
  }
  return false;
}

function saveToLocal() {
  localStorage.setItem("stateObject", JSON.stringify(stateObject));
}

function initialState() {
  if (localStorage.getItem("stateObject") !== null) {
    stateObject = JSON.parse(localStorage.getItem("stateObject"));
    renderToDoList();
  }
}

function createElement(element) {
  // creates new list element with the description of the task
  const newLi = document.createElement("li");
  const newDescription = document.createTextNode(element.description);
  // add a line through if checked
  if (element.checked === true) {
    newLi.classList.add("crossed");
  }
  // creates a checkbox after the todo
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.checked = element.checked;
  checkBox.setAttribute("data-id", element.id.toString());
  // puts the element togehter and puts it into the DOM
  newLi.append(newDescription);
  newLi.append(checkBox);
  return newLi;
}

function renderToDoList() {
  document.querySelector("#list").innerHTML = "";

  if (stateObject.filter === "done") {
    stateObject.entries.forEach((element) => {
      if (element.checked === true) {
        document.querySelector("#list").append(createElement(element));
      }
    });
  } else if (stateObject.filter === "undone") {
    stateObject.entries.forEach((element) => {
      if (element.checked === false) {
        document.querySelector("#list").append(createElement(element));
      }
    });
  } else {
    stateObject.entries.forEach((element) => {
      document.querySelector("#list").append(createElement(element));
    });
  }

  saveToLocal();
}

//event listener for button clicks
document.querySelector("#add-todo").addEventListener("click", () => {
  const description = document.querySelector("#new-todo").value;
  if (isDuplicate(description) === false) {
    const id = Date.now();
    const toDo = new Todo(id, description, false);
    stateObject.entries.push(toDo);
    renderToDoList();
  }
});

// event listener for the checkboxes
document.querySelector("#list").addEventListener("change", (event) => {
  const id = event.target.getAttribute("data-id");
  // find a way to access the value directly
  stateObject.entries.forEach((element) => {
    if (element.id == id) {
      element.checked = event.target.checked;
    }
  });
  renderToDoList();
});

// event listener for the radio buttons
const radioButtons = document.querySelector("#radio-buttons");
radioButtons.addEventListener("change", (event) => {
  stateObject.filter = event.target.id;
  renderToDoList();
});

// event listener for clear button
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  stateObject.entries = stateObject.entries.filter((element) => {
    if (element.checked === false) {
      return element;
    }
  });
  console.log(stateObject.entries);
  renderToDoList();
});

//sets the initial state when you load the site for the first time
initialState();
