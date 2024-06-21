class ModelUser {
  constructor(username) {
    this.id_user = Math.random();
    this.username = username;
    this.todo = [];
  }

  toPlainObject() {
    return {
      id_user: this.id_user,
      username: this.username,
    };
  }

  static fromPlainObject(obj) {
    const user = new ModelUser(obj.username);
    return user;
  }
}

export default ModelUser;
