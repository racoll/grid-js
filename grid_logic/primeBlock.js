const toggleBlocks = require("./toggleBlocks.js");

function primeBlock(i) {
  // window.onload = function(){
    document.getElementById(i.toString()).addEventListener("click", function() {
      toggleBlocks(i);
    });
  // }
};

  module.exports = primeBlock;