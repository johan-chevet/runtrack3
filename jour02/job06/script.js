class State {
  target = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  stateIndex = 0;
  statefinite = false;

  onInput(input) {
    if (this.statefinite) return;
    if (this.target[this.stateIndex] === input) {
      this.stateIndex++;
    } else {
      this.stateIndex = 0;
    }
  }

  targetReached() {
    if (this.stateIndex === this.target.length) {
      this.statefinite = true;
    }
    return this.statefinite;
  }
}

var state = new State();
document.addEventListener("keydown", (event) => {
  state.onInput(event.key);
  if (!state.statefinite && state.targetReached()) {
    // Create html
    let header = document.createElement("header");
    header.setAttribute("id", "laplateforme-header");
    let content = document.createTextNode("La Plateforme");
    header.append(content);
    document.body.append(header);
  }
});
