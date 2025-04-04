const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function renderTasks() {
  taskList.innerHTML = '';

  const tasks = todoList.getTasks();

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.style.cursor = 'pointer';

    li.addEventListener('click', () => {
      todoList.removeTask(index);
      renderTasks();
    });

    taskList.appendChild(li);
  });
}


addTaskButton.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task !== '') {
    todoList.addTask(task);
    taskInput.value = '';
    renderTasks();
  }
});

document.addEventListener('DOMContentLoaded', renderTasks);

