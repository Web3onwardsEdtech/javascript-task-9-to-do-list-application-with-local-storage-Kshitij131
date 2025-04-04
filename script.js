const todoList = (function () {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    function addTask(task) {
      tasks.push(task);
      saveTasks();
    }
  
    function removeTask(index) {
      tasks.splice(index, 1);
      saveTasks();
    }
  
    function getTasks() {
      return [...tasks];
    }
  
    return {
      addTask,
      removeTask,
      getTasks
    };
  })();
  
