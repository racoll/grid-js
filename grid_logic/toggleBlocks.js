function toggleBlocks(i) {
    for (let x = 1; x < 145; x++) {
      if (!(x % i)) {
          document.getElementById(x.toString()).classList.toggle("block-red");
          console.log(`you clicked block ${i}`)
      };
    };
  };

  module.exports = toggleBlocks;



  // if any block is red, disable click event
  // clikcing the same block turns all white
  // clicking any other block does nothing