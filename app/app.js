// source goes here
// const createGrid = require("../grid_logic/createGrid.js");
const createContainer = require("../grid_logic/createContainer.js");

var app = {
  // this is the entry point for your app.
  init: function() {
    console.log("hello from app!");
  }
};

createContainer();

module.exports = app;