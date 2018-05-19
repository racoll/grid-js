var toggleBlocks = require("../grid_logic/toggleBlocks.js")

describe("#toggleBlocks", function() {

    jsdom();
  
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
      // expect(block.getPropertyValue("background-color") === "red");
      // expectation that checks block 70 and 140 have class = "block-red"
    })
  
  });