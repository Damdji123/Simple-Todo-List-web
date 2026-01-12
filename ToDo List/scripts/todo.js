// todo.js
import { getTasks, addTask, toggleTask, deleteTask } from "./utils/taskStore.js";

const display = document.getElementById("display");
const input = document.getElementById("task-input");
const btnAdd = document.getElementById("todo-add-btn");

// Add task from Todo page
btnAdd.addEventListener("click", () =>{
    
    const text = input.value.trim();
    if (!text) return alert("Enter a task!");

    addTask(text);
    input.value = "";
    renderTasks();
});

// Render tasks
function renderTasks() {
    display.innerHTML = "";
    const tasks = getTasks();

    tasks.forEach(task => {
        display.innerHTML += `
            <div class="displayList" data-id="${task.id}">
                <input type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggle(${task.id})"
                >
                <span class="${task.completed ? "done" : ""}">
                    ${task.text}
                </span>
                <button class="deleteBtn" onclick="remove(${task.id})">Delete</button>
            </div>
        `;
        
    });
}
display.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        const id = Number(e.target.closest(".displayList").dataset.id);
        toggleTask(id);
        renderTasks();
    }
});

display.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteBtn")) {
        const id = Number(e.target.closest(".displayList").dataset.id);
        deleteTask(id);
        renderTasks();
    }
});

// Expose functions
/*window.toggle = toggleTask;
window.remove = function (id) {
    deleteTask(id);
    renderTasks();
}; */

renderTasks();
