var createGrid = require("../grid_logic/createGrid.js")

describe("#createGrid", function() {
  
    it("should create a grid of 144 blocks", function(done) {
        createGrid();
        block = document.createElement("div");
        block.className = "block";
        var testBlock1 = (block.getElementsByClassName("block")[0]);
        expect(testBlock1.querySelector("id")).toEqual("1");
        var testBlock2 = (block.getElementsByClassName("block")[143]);
        expect(testBlock2.querySelector("id")).toEqual("144");
  });

});