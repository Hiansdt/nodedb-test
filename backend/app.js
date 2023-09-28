const fs = require('fs');

const todos = require('./todos.js');

const _ = require('lodash');

const yargs = require('yargs');

const args = yargs.argv;

var command = args._[0];

console.log('Running command: ' + command);

if (command === 'addTodo') {
    todos.addTodo(args.title);
} else if(command === 'deleteTodo') {
    todos.deleteTodo(args.title);
} else {
    console.log('invalid command')
}