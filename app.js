// Get references to the form, input, and task list
const form = document.querySelector(".form");
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

  // Create an update button and append it to the new task
  const updateButton = document.createElement("button");
  updateButton.innerText = "Update";
  updateButton.addEventListener("click", updateTask);
  newTask.appendChild(updateButton);
  
  // Append the new task to the task list
  taskList.appendChild(newTask);

  // Clear the task input
  taskInput.value = "";
}

// Delete a task from the list
function deleteTask(event) {
  // Get the parent list item of the clicked button
  const taskItem = event.target.parentElement;

  // Remove the task from the list
  taskList.removeChild(taskItem);
}

// Update a task in the list
function updateTask(event) {
  // Get the parent list item of the clicked button
  const taskItem = event.target.parentElement;
  const taskText = taskItem.innerText;

  // Show a prompt to enter the updated task
  const updatedTask = prompt("Enter the updated task", taskText);

  // Update the task text
  taskItem.innerText = updatedTask;
}
