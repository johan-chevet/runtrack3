$(document).ready(function () {
  function swapValues(index1, index2){
    const tmp = puzzleGrid[index1];
    puzzleGrid[index1] = puzzleGrid[index2];
    puzzleGrid[index2] = tmp;
  }

  function shuffle() {
    for (let i = puzzleGrid.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      swapValues(i, j);
    }
  }

  // Add css order to each tiles so it display the puzzle in the current order
  function applyOrderOnItems() {
    for (let i = 0; i < puzzleGrid.length; i++) {
      $(`#tile-${puzzleGrid[i]}`).css("order", i);
    }
  }

  function isInOrder() {
    for (let i = 0; i < puzzleGrid.length - 1; i++) {
      if (puzzleGrid[i] !== i + 1) {
        return false;
      }
    }
    return true;
  }

  function onTileClick() {
    // Get the id of the item from id name (tile-x)
    const id = $(this).attr("id").substring(5);
    if (id == 0 || gameover) {
      return;
    }

    const index = puzzleGrid.findIndex(value => value == id);

    // Check down
    if (index + 3 < puzzleGrid.length && puzzleGrid[index + 3] == 0) {
      swapValues(index, index + 3);
    }
    // Check up
    else if (index - 3 >= 0 && puzzleGrid[index - 3] == 0) {
      swapValues(index, index - 3);
    }
    // Check left
    else if (index % 3 != 0 && puzzleGrid[index - 1] == 0) {
      swapValues(index, index - 1);
    }
    // Check right
    else if (index != 2 && index != 5 && index != 8 && puzzleGrid[index + 1] == 0) {
      swapValues(index, index + 1);
    }
    applyOrderOnItems();
    // Check if win, if so, display last tile image,
    // set game over to true and display reset container
    if (isInOrder()) {
      gameover = true;
      $(".reset-container").css("display", "inline").click(reset);
      $("#tile-0").css("background-image", "url('./img/9.png')");
    }
  }

  function isSolvable() {
    // Create a copy of the grid without the empty tile (0)
    let gridtmp = puzzleGrid.filter(value => value !== 0);
    let inversions = 0;

    // Count the number of inversions:
    // An inversion is when a tile with a higher number precedes a tile with a lower number
    for (let i = 0; i < gridtmp.length; i++) {
      for (let j = i + 1; j < gridtmp.length; j++) {
        if (gridtmp[i] > gridtmp[j]) {
          inversions++;
        }
      }
    }
    // For a 3x3 grid, the puzzle is solvable if the number of inversions is even
    return inversions % 2 === 0;
  }

  // Reset game state and shuffle new grid
  function reset() {
    do {
      shuffle();
    } while (!isSolvable());
    applyOrderOnItems();
    gameover = false;

    // Hide reset container and tile-0 image
    $(".reset-container").css("display", "none");
    $("#tile-0").css("background-image", "none");
  }

  let puzzleGrid= [1, 2, 3, 4, 5 ,6, 7, 8, 0];
  let gameover = false;
  $(".tile").click(onTileClick);
  reset();
});
