console.log("Welcome to the Which? Javascript exercise!");
console.log("If you are reading this, your Javascript runtime is all up and running correctly.");
// console.log("hello");
// dont put any source in this file, this is just an entry point for the app.
// you can require things in.

const createGrid = require("../grid_logic/createGrid.js");

require('./styles.css');
var app = require('./app.js');
app.init();
window.onload = function(){
    createGrid();
}

