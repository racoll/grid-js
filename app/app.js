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
    primeBlock(i);
  };
};

function createBlock(i) {
  block = document.createElement("div");
  block.className = "block";
  block.id = `${i}`;
  block.innerHTML = `${i}`;
  block.style.height = `${50}px`;
  block.style.width = `${50}px`;
  document.body.getElementsByClassName("grid-container")[0].appendChild(block);
};

function primeBlock(i) {
  document.getElementById(i.toString()).addEventListener("click", function() {
    console.log("hello");
  });
};


createGrid();

module.exports = app;
