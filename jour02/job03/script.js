function addone() {
  let compteur = document.getElementById("compteur");
  compteur.innerText++;
}
const button = document.getElementById("button");
button.addEventListener("click", addone());
