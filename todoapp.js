function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var newTask = document.createElement("li");
    newTask.textContent = taskText;

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        taskList.removeChild(newTask);
    };

    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);

    taskInput.value = "";
}

document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
