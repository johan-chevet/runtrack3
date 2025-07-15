async function onLoad() {
  // fetch("./pokemon.json").then((response) => {
  //   response.json().then((data) => {
  //     console.log(data);
  //   });
  // });
  const response = await fetch("./pokemon.json");
  const data = await response.json();
  const typeArray = [];
  data.forEach((element) => {
    element.type.forEach((x) => {
      if (typeArray.find((v) => v === x) === undefined) {
        typeArray.push(x);
      }
    });
  });
  return typeArray;
}

onLoad();
