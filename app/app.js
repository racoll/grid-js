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

function createBlock() {
  block = document.createElement("div");
};

module.exports = app;
