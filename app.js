// Get references to the form, input, and task list
const form = document.querySelector("form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

// Add event listener for form submission
form.addEventListener("submit", addTask);

// Add a new task to the list
function addTask(event) {
  event.preventDefault();

  // Create a new list item
  const newTask = document.createElement("li");
  newTask.innerText = taskInput.value;

  // Create a delete button and append it to the new task
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", deleteTask);
  newTask.appendChild(deleteButton);
