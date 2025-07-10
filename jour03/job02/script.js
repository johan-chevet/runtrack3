$(document).ready(function () {
  $("#btn-shuffle").on("click", function () {
    let items = $("#items");
    let rainbows = items.children();
    while (rainbows.length) {
      items.append(rainbows.splice(Math.floor(Math.random() * rainbows.length), 1)[0]);
    }
  });
  $("#items > img").on("click", function () {
    let inPlace = true;
    let itemsPlacedBox = $("#items-placed");
    // Unbind click event
    let imgSelected = $(this).off();
    itemsPlacedBox.append(imgSelected);
    // console.log(itemsPlacedBox.length);
    if (itemsPlacedBox.children().length === 6) {
      // check order
      for (let i = 0; i < itemsPlacedBox.children().length; i++) {
        let rainbow = $(itemsPlacedBox.children()[i]);
        if (rainbow.attr("id") != i + 1) {
          inPlace = false;
        }
      }
      if (inPlace) {
        // add winner text
      } else {
        // add loser text
      }
      console.log("In place: ", inPlace)
    }
  });
});
