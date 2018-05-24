var createGrid = require("../grid_logic/createGrid.js")

describe("#createGrid", function() {

  createGrid();
  
  it("should create a grid of 144 blocks", function() {
      var testBlock1 = (document.getElementsByClassName("block")[1]);
      expect(testBlock1.id).toEqual("1");
      var testBlock2 = (document.getElementsByClassName("block")[144]);
      expect(testBlock2.id).toEqual("144");
  });

  // it("block class count should equal 144", function(){
  //   // createGrid();
  //   var blocks = document.getElementsByClassName("block");
  //   expect(blocks.length).toEqual(144);
  // });
  

});