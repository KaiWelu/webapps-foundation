class Todo {
  constructor(id, description, checked) {
    this.id = id;
    this.description = description;
    this.checked = checked;
  }
}

let toDoList = [];

const stateObject = {
  filter: "all",
  entries: [],
};

stateObject.entries.push(new Todo(Date.now() + 1, "Wäsche", false));
stateObject.entries.push(new Todo(Date.now() + 2, "Einkaufen", true));
stateObject.entries.push(new Todo(Date.now() + 3, "Aufräumen", false));
console.log(stateObject.entries);

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

function renderToDoList() {
  document.querySelector("#list").innerHTML = "";
  filterList("undone");
  toDoList.forEach((element) => {
    const newLi = document.createElement("li");
    const newDescription = document.createTextNode(element.description);
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = element.checked;
    checkBox.setAttribute("data-id", element.id.toString());
    newLi.append(newDescription);
    newLi.append(checkBox);
    document.querySelector("#list").append(newLi);
  });
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
});

renderToDoList();
