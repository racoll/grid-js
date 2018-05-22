var createGrid = require("../grid_logic/createGrid.js")

describe("#createGrid", function() {
  
    it("should create a grid of 144 blocks", function() {
        createGrid();
        block = document.createElement("div");
        block.className = "block";
        var testBlock1 = (document.getElementsByClassName("block")[0]);
        expect(testBlock1.id).toEqual("1");
        var testBlock2 = (document.getElementsByClassName("block")[144]);
        expect(testBlock2.id).toEqual("144");
  });

});