// taskStore.js

const STORAGE_KEY = "myTodoTasks";

// Get tasks
export function getTasks() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

// Save tasks
function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Add task
export function addTask(text) {
    const tasks = getTasks();

    const newTask = {
        id: Date.now(),
        text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
}

// Toggle task
export function toggleTask(id) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks(tasks);
    }
}

// Delete task
export function deleteTask(id) {
    const tasks = getTasks().filter(t => t.id !== id);
    saveTasks(tasks);
}
