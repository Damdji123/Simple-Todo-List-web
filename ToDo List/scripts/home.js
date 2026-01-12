// home.js
import { getTasks, addTask, deleteTask, toggleTask } from "./utils/taskStore.js";

const list = document.getElementById("display");
const input = document.getElementById("task-input");
const addBtn = document.getElementById("home-add-btn");

// Add task from Home page
addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) return alert("Enter a task!");

    addTask(text);
    input.value = "";
    renderHomeTasks();
});

// Display tasks on Home
function renderHomeTasks() {
    list.innerHTML = "";
    const tasks = getTasks();

    tasks.forEach(task => {
        list.innerHTML += `
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

/*window.toggle = toggleTask;
window.remove = function (id) {
    deleteTask(id);
    renderHomeTasks();
};
*/
// Focus on input 
const focusBtn = document.getElementById("focus-task-btn");
const focusInput = document.getElementById("task-input");

focusBtn.addEventListener("click", () => {
    focusInput.scrollIntoView({ behavior: "smooth", block: "center" });
    focusInput.focus();
});



renderHomeTasks();
