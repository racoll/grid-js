const primeBlock = require("./primeBlock.js");

function toggleBlocks(i) {
    for (let x = 1; x < 145; x++) {
      if (!(x % i))
        document.getElementById(x.toString()).classList.toggle("block-red");
    };
  };

  module.exports = toggleBlocks;
