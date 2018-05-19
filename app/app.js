// source goes here
const createGrid = require("../grid_logic/createGrid.js");
// const createBlock = require("../grid-logic/createBlock.js");
// const primeBlock = require("../grid-logic/primeBlock.js");
// const toggleBlocks = require("../grid-logic/toggleBlocks.js");

var app = {
  // this is the entry point for your app.
  init: function() {
    console.log("hello from app!");
  }
};

createGrid();

module.exports = app;
