async function fetchAndDisplayUsers() {
  try {
    const response = await fetch("./user.php");
    const content = await response.json();
    let tableBody = document.querySelector("tbody");
    tableBody.innerText = "";
    for (const user of content) {
      const row = document.createElement("tr");
      for (const [_, value] of Object.entries(user)) {
        const data = document.createElement("td");
        data.innerHTML = value;
        row.append(data);
      }
      tableBody.append(row);
    }
  } catch (e) {
    console.error(e);
  }
}
