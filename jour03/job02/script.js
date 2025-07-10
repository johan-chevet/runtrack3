$(document).ready(function () {
  $("#btn-shuffle").on("click", function () {
    let parent = $("#items");
    let divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  });
  $("#items > img").on("click", function () {
    let itemsPlacedBox = $("#items-placed");
    // Unbind click event
    let imgSelected = $(this).off();
    console.log(imgSelected);
    itemsPlacedBox.append(imgSelected);
    // console.log(itemsPlacedBox.length);
    if (itemsPlacedBox.children().length === 6) {
      // check order
      for (let i = 0; i < itemsPlacedBox.children().length; i++) {
        console.log(itemsPlacedBox.children()[i]);
        // if (itemsPlacedBox)
      }
    }
  });
});
