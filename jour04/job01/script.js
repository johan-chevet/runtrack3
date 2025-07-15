async function fetchContent() {
  try {
    const response = await fetch("./expression.txt");
    const content = await response.text();
    const element = document.createElement("p");
    element.innerText = content;
    document.body.append(element);
  } catch (error) {
    console.error("Fetch error", error);
  }
}
