import ModelTodo_manager from "../models/Todo_manager.js";

class ControllerTodo_manager {
  constructor(todoItemFormatter) {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
  }
  saveTodos() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  createTodo(title, description) {
    const todo = new ModelTodo_manager(title, description);
    this.todos.push(todo);
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.saveToLocalStorage();
  }

  editTodo(id, updatedTask) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.task = updatedTask;
      this.saveToLocalStorage();
    }
    return todo;
  }
}

export default ControllerTodo_manager;
