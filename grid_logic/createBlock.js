function createBlock(i) {
    block = document.createElement("div");
    block.className = "block";
    block.id = `${i}`;
    block.innerHTML = `${i}`;
    block.style.height = `${75}px`;
    block.style.width = `${75}px`;
    document.getElementById("grid-container").appendChild(block);
  };

  module.exports = createBlock; 