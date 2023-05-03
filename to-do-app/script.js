class Todo {
  constructor(id, description, checked) {
    this.id = id;
    this.description = description;
    this.checked = checked;
  }
}

let toDoList = [];

let stateObject = {
  filter: "all",
  entries: [],
};

function isDuplicate(input) {
  for (let i = 0; i < stateObject.entries.length; i++) {
    if (
      stateObject.entries[i].description.toLowerCase() === input.toLowerCase()
    ) {
      return true;
    }
  }
  return false;
}

function filterList(rule) {
  toDoList = [];
  if (rule === "done") {
    stateObject.entries.forEach((element) => {
      if (element.checked === true) {
        toDoList.push(element);
      }
    });
  } else if (rule === "undone") {
    stateObject.entries.forEach((element) => {
      if (element.checked === false) {
        toDoList.push(element);
      }
    });
  } else {
    toDoList = [...stateObject.entries];
  }
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

function createListElement() {
  toDoList.forEach((element) => {
    // creates new list element with the description of the task
    const newLi = document.createElement("li");
    const textDiv = document.createElement("div");
    const newDescription = document.createTextNode(element.description);
    textDiv.setAttribute("data-id", element.id.toString());

    // creates a checkbox after the todo
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = element.checked;
    checkBox.setAttribute("data-id", element.id.toString());

    // puts the element togehter and appends it to the DOM
    textDiv.append(newDescription);
    newLi.append(textDiv);
    newLi.append(checkBox);
    document.querySelector("#list").append(newLi);

    // adds a delete function
    textDiv.addEventListener("click", (event) => {
      for (let i = 0; i < stateObject.entries.length; i++) {
        if (stateObject.entries[i].id == event.target.getAttribute("data-id")) {
          stateObject.entries.splice(i, 1);
        }
      }
      renderToDoList();
    });
  });
}

function renderToDoList() {
  document.querySelector("#list").innerHTML = "";
  filterList(stateObject.filter);
  createListElement();
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

// event listener for radio buttons
const radioButtons = document.querySelector("#radio-buttons");
radioButtons.addEventListener("change", (event) => {
  stateObject.filter = event.target.id;
  renderToDoList();
});

initialState();
// renderToDoList();

// const test = document.querySelector("#test");
// test.addEventListener("click", (event) => {
//   test.remove();
// });
