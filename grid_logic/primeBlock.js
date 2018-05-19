const toggleBlocks = require("./toggleBlocks.js");

function primeBlock(i) {
    document.getElementById(i.toString()).addEventListener("click", function() {
      toggleBlocks(i);
    });
  };

  module.exports = primeBlock;