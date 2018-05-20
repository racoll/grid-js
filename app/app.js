// source goes here
const createGrid = require("../grid_logic/createGrid.js");

var app = {
  // this is the entry point for your app.
  init: function() {
    console.log("hello from app!");
  }
};

createGrid();

module.exports = app;
