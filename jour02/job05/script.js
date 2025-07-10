document.addEventListener("scroll", (event) => {
  var docElem = document.documentElement;
  var scrollPercent =
    (docElem.scrollTop / (docElem.scrollHeight - docElem.clientHeight)) * 100;

  const footer = document.querySelector("footer");
  footer.style.backgroundColor = `rgb(${(scrollPercent * 255) / 100},0 ,${
    (scrollPercent * 255) / 100
  })`;
});

document.querySelector("footer").style.backgroundColor = "rgb(0, 0, 0)";
