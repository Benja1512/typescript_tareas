"use strict";
// Clase que represente una tarea
//1.- Nombre de la tarea
//2.- ¿se ha completado?
class TodoItem {
    constructor(task, isCompleted) {
        this.task = task;
        this.isCompleted = isCompleted;
    }
}
//administrador de las tareas
//1. lista de las tareas
//2.- defina las operaciones a ejecutar con las tareas
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        const newItem = new TodoItem(task, false);
        this.tasks.push(newItem);
    }
}
class HTMLHelper {
    static createTaskItem(task) {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                task.isCompleted = true;
                displayTasks();
            }
        });
        const label = document.createElement("label");
        checkbox.type = "checkbox";
        label.innerText = task.task;
        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        return listItem;
    }
}
const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const incompleteTaskHolder = document.getElementById("incomplete-tasks");
const completedTasksHolder = document.getElementById("completed-tasks");
const taskManager = new TaskManager();
addButton.addEventListener("click", () => {
    taskManager.addTask(taskInput.value);
    displayTasks();
    clear();
});
function displayTasks() {
    completedTasksHolder.innerHTML = "";
    incompleteTaskHolder.innerHTML = "";
    taskManager.tasks.forEach(element => {
        var listItem = HTMLHelper.createTaskItem(element);
        if (element.isCompleted) {
            completedTasksHolder.appendChild(listItem);
        }
        else {
            incompleteTaskHolder.appendChild(listItem);
        }
    });
}
function clear() {
    taskInput.value = "";
}
