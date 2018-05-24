var toggleBlocks = require("../grid_logic/toggleBlocks.js");
var createGrid = require("../grid_logic/createGrid.js");
var createBlock = require("../grid_logic/createBlock.js")

describe("#toggleBlocks", function() {

    createGrid();
  
    it("changes the selected block red", function() {
      toggleBlocks(60);
      var testBlock = (document.getElementsByClassName('block')[60]);
      expect(testBlock.className).toEqual("block block-red");
    });
  
    it("changes the multiples of selected block red", function() {
      toggleBlocks(70);
      var testBlock = document.getElementsByClassName('block')[70];
      var testBlock2 = document.getElementsByClassName('block')[140];
      expect(testBlock.className).toEqual("block block-red");
      expect(testBlock2.className).toEqual("block block-red");
    })

    it("changes the block back to white upon second click", function() {
    toggleBlocks(50);
    var testBlock = document.getElementsByClassName('block')[50];
    expect(testBlock.className).toEqual("block block-red");
    toggleBlocks(50);
    expect(testBlock.className).toEqual("block");
    });
  
});