import ControllerUsers from "./controllers/User.js";
import ControllerTodo_manager from "../controllers/Todo_manager.js";

class App {
  constructor() {
    this.users = new ControllerUsers();
    this.todo_manager = new ControllerTodo_manager();
    this.session = null;
  }
  signup(username, password, email, phone) {
    if (this.users.findByEmail(email)) {
      console.log("Email già in uso");
      return "Email già in uso";
    }
    if (!this.validateEmail(email)) {
      console.log("Email non valida");
      return "Email non valida";
    }
    if (username === password) {
      console.log("Username e password non possono essere uguali");
      return "Username e password non possono essere uguali";
    }
    if (password.length < 8) {
      console.log("Password troppo corta");
      return "Password troppo corta";
    }
    this.users.createUser(username, password, email, phone);
    console.log("Registrazione completata con successo");
    return "Registrazione completata con successo";
  }

  login(email, password) {
    const user = this.users.authenticate(email, password);
    if (user) {
      this.session = user;
      console.log("Login effettuato correttamente");
      return "Login effettuato correttamente";
    } else {
      console.log("Email o password errati");
      return "Email o password errati";
    }
  }

  logout() {
    this.session = null;
    console.log("Logout effettuato correttamente");
    return "Logout effettuato correttamente";
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  addTodo(todo) {
    this.todo_manager.addTodo(this.session.id_user, todo);
    console.log("Todo aggiunto con successo");
    return "Todo aggiunto con successo";
  }
  deleteTodo(id) {
    this.todo_manager.deleteTodo(this.session.id_user, id);
    console.log("Todo eliminato con successo");
    return "Todo eliminato con successo";
  }
  getTodos() {
    return this.todo_manager.getTodos(this.session.id_user);
  }
  editTodo(id) {
    this.todo_manager.editTodo(this.session.id_user, id);
    console.log("Todo modificato con successo");
    return "Todo modificato con successo";
  }
}
