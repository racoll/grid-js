var createBlock = require("../grid_logic/createBlock.js")

describe("#createBlock", function() {

    var container = document.createElement('div')
    container.className = 'grid-container'
    container.id = 'grid-container'
    document.body.appendChild(container)
    createBlock(1);
  
    it("should have an id", function() {
      var block = document.getElementsByClassName('block')[0]
      expect(block.id).toEqual("1");
    });
    
    it("should have innerHTML of id", function() {
      var block = document.getElementsByClassName('block')[0]
      expect(block.innerHTML).toEqual("1");
    });
    
    it("should have a width of 250px", function() {
      var block = document.getElementsByClassName('block')[0]
      expect(block.style.width).toEqual("250px");
    });
    
    it("should have a height of 250px", function() {
      var block = document.getElementsByClassName('block')[0]
      expect(block.style.height).toEqual("250px");
    });
  
  });