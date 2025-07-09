function showhide() {
  const exist = document.querySelector("article");
  if (exist) {
    exist.remove();
  } else {
    article = document.createElement("article");
    article.innerHTML = "L'important n'est pas la chute, mais l'atterrissage.";
    document.body.appendChild(article);
  }
}
