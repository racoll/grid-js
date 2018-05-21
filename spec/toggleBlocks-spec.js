var toggleBlocks = require("../grid_logic/toggleBlocks.js");
var createGrid = require("../grid_logic/createGrid.js");

describe("#toggleBlocks", function() {


  
    beforeEach(function() {
      createGrid()
    });
  
    it("changes the selected boock red", function() {
      toggleBlocks(70)
      var testBlock = block.getElementById(70);
      expect(testBlock.getPropertyValue("class") === "block-red");
    });
  
    it("changes the multiples of selected block red", function() {
      toggleBlocks(70);
      var testBlock = block.getElementById(70);
      var testBlock2 = block.getElementById(140);
      expect(testBlock.getPropertyValue("class") === "block-red");
      expect(testBlock2.getPropertyValue("class") === "block-red");
    })

    it("changes the block back to white upon second click", function() {
    toggleBlocks(70);
    var testBlock = block.getElementById(70);
    expect(testBlock.getPropertyValue("class") === "block-red");
    toggleBlocks(70);
    expect(testBlock.getPropertyValue("class") === "block");
    });
  
  });