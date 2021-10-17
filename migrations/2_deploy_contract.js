const TodoList = artifacts.require("Todolist");

module.exports = function (deployer) {
  deployer.deploy(TodoList);
};
