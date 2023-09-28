console.log('Starting todos.js');

const fs = require('fs');

var addTodo = (title) => {
    var todos = [];
    var todo = {
        title
    };

    try {
        var todosString = fs.readFileSync('todos-data.json');
        todos = JSON.parse(todosString);
    } catch (e) {

    }
    var duplicateTodos = todos.filter((todo) => todo.title === title);

    if (duplicateTodos.length === 0) {
        todos.push(todo);
        fs.writeFileSync('todos-data.json', JSON.stringify(todos));
    }
};

var deleteTodo = (title) => {
    var todos = [];
    var todo = {
        title
    };
    try {
        var todosString = fs.readFileSync('todos-data.json');
        todos = JSON.parse(todosString);
    } catch (e) {

    }

    var filteredTodo = todos.filter((todo) => todo.title !== title);

    if (filteredTodo.length === todos.length) {
        console.log('Todo not found');
    } else {
        todos = filteredTodo;
        console.log('"' + todo.title + '"' + ' was removed')
    }

    fs.writeFileSync('todos-data.json', JSON.stringify(todos));
}

module.exports = {
    addTodo,
    deleteTodo,
};