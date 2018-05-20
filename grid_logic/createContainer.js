const createGrid = require("../grid_logic/createGrid.js");

function createContainer(){
    container = document.createElement("div");
    container.className = "grid-container";
    createGrid();
  };

  module.exports = createContainer;