function toggleBlocks(i) {
    for (let x = 1; x < 145; x++) {
      if (!(x % i)) {
        // window.onload = function(){
          document.getElementById(x.toString()).classList.toggle("block-red");
          console.log(`you clicked block ${i}`)
        // }
      };
    };
  };

  module.exports = toggleBlocks;