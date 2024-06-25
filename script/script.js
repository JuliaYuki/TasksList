const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


addTaskBtn.addEventListener("click", addTask);


taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask(); 
  }
});

function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const newTask = document.createElement("div");

        newTask.classList.add("task");
        newTask.innerHTML = `
            <input type="checkbox">
            <span>${taskValue}</span>
        `;

        taskList.appendChild(newTask);
        taskInput.value = "";

        const checkbox = newTask.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('click', () => {
            const taskSpan = newTask.querySelector('span');
            taskSpan.classList.toggle('completed');
        });
    }
}