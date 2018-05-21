const createBlock = require("./createBlock.js");
const primeBlock = require("./primeBlock.js");

function createGrid() {
  for (let i = 1; i < 145; i++) {
    createBlock(i);
    primeBlock(i);
  };
};

  module.exports = createGrid;