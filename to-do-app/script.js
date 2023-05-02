class Todo {
  constructor(id, description, checked) {
    this.id = id;
    this.description = description;
    this.checked = checked;
  }
}

const toDoList = [];

toDoList.push(new Todo(Date.now() + 1, "Wäsche", false));
toDoList.push(new Todo(Date.now() + 2, "Einkaufen", true));
toDoList.push(new Todo(Date.now() + 3, "Aufräumen", false));
console.log(toDoList);

function renderToDoList() {
  document.querySelector("#list").innerHTML = "";
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
  const id = Date.now();
  const description = document.querySelector("#new-todo").value;
  const toDo = new Todo(id, description, false);
  toDoList.push(toDo);
  renderToDoList();
});

// event listener for the checkboxes
document.querySelector("#list").addEventListener("change", (event) => {
  const id = event.target.getAttribute("data-id");
  toDoList.forEach((element) => {
    if (element.id == id) {
      element.checked = event.target.checked;
    }
  });
});

function renderState() {}

renderToDoList();
