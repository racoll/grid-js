// source goes here
var app = {
  // this is the entry point for your app.
  init: function() {
    console.log("hello from app!");
  }
};


function createGrid() {
  for (let i = 1; i < 145; i++) {
    createBlock(i);
  };
};

function createBlock(i) {
  block = document.createElement("div");
  block.id = `${id}`;
  document.body.getElementsByClassName("grid-container")[0].appendChild(block);
};

createGrid();

module.exports = app;
