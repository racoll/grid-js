function createBlock(i) {
    block = document.createElement("div");
    block.className = "block";
    block.id = `${i}`;
    block.innerHTML = `${i}`;
    block.style.height = `${250}px`;
    block.style.width = `${250}px`;
    document.body.getElementsByClassName("grid-container")[0].appendChild(block);
    console.log(document);
  };

  module.exports = createBlock;


