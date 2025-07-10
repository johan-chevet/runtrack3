document.body.addEventListener("keypress", (event) => {
  const keylog = document.getElementById("keylogger");
  keylog.value += event.key;
});
