$(document).ready(function () {
  // On image click, clone the current element and
  // append to the target box. Current element is made invisible
  // Then check correct order when finished
  function onImageClick() {
    let inPlace = true;
    let itemsPlacedBox = $("#first-box");
    $(this).clone().appendTo(itemsPlacedBox);
    $(this).css("display", "none");
    if (itemsPlacedBox.children().length === 6) {
      // Check order
      for (let i = 0; i < itemsPlacedBox.children().length; i++) {
        let rainbow = $(itemsPlacedBox.children()[i]);
        if (rainbow.attr("id") != i + 1) {
          inPlace = false;
        }
      }
      // Create result elementS
      let resultElem = $("<span></span>").attr("id", "result");
      if (inPlace) {
        resultElem.text("Vous avez gagné");
        resultElem.css("color", "green");
      } else {
        resultElem.text("Vous avez perdu");
        resultElem.css("color", "red");
      }
      // Add result elem next to shuffle button
      $("#btn-shuffle").after(resultElem);
    }
  }

  // Shuffle button
  $("#btn-shuffle").on("click", function () {
    // Remove all elements from first box
    let firstBoxItems = $("#first-box").children();
    if (firstBoxItems.length) {
      for (const items of firstBoxItems) {
        $(items).remove();
      }
    }
    // Display all elements from second box that was made invisible
    let secondBoxItems = $("#second-box").children();
    for (item of secondBoxItems) {
      $(item).css("display", "inline");
    }

    // Create new array of shuffled elements and remove current
    // elements from second box
    let newArray = [];
    while (secondBoxItems.length) {
      let rainbow = secondBoxItems.splice(
        Math.floor(Math.random() * secondBoxItems.length),
        1
      )[0];
      newArray.push(rainbow);
      $(rainbow).remove();
    }
    // Append new elements to the second box and bind onClick function
    for (elem of newArray) {
      $(elem).click(onImageClick);
      $("#second-box").append(elem);
    }
    // Delete result when shuffle
    $("#result").remove();
  });
  $("#second-box > img").on("click", onImageClick);
});
