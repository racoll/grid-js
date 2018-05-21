var createBlock = require("../grid_logic/createBlock.js")

describe("#createBlock", function() {

  
    beforeEach(function(){
      createBlock(1);
    });
  
    it("should have an id", function() {
      expect(block.getElementById()).toEqual("1");
    });
  
    it("should have innerHTML of id", function() {
      expect(block.innerHTML).toEqual("1");
    });
  
    it("should have a width of 250px", function() {
      expect(block.style.width).toEqual("250px");
    });
  
    it("should have a height of 250px", function() {
      expect(block.style.height).toEqual("250px");
    });
  
  });