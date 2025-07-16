async function setPokemonTypes() {
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
  typeArray.forEach((type) => {
    const option = document.createElement("option");
    option.innerText = type;
    document.querySelector("#type").append(option);
  });
}

function parseObjectAndCreateElement(object, elementName) {
  const objElement = document.createElement("div");
  objElement.setAttribute("class", elementName);
  for (const [key, value] of Object.entries(object)) {
    const keyValueElem = document.createElement("div");
    if (isNaN(key)) {
      const elementTitle = document.createElement("span");
      elementTitle.innerHTML = key + ": ";
      keyValueElem.append(elementTitle);
    }
    let keyElement = undefined;
    if (typeof value == "number" || typeof value == "string") {
      keyElement = document.createElement("span");
      keyElement.setAttribute("class", key);
      keyElement.innerHTML = value;
    } else if (typeof value == "object") {
      keyElement = parseObjectAndCreateElement(value, key);
    }
    if (keyElement) {
      keyValueElem.append(keyElement);
      objElement.append(keyValueElem);
    }
  }
  return objElement;
}

function createPokemonList(data) {
  let pokemonList = document.getElementById("pokemon-list");
  if (pokemonList) {
    pokemonList.remove();
  }
  pokemonList = document.createElement("div");
  pokemonList.setAttribute("id", "pokemon-list");
  data.forEach((pokemon) => {
    const elem = parseObjectAndCreateElement(pokemon, "pokemon-card");
    pokemonList.append(elem);
  });
  document.body.append(pokemonList);
}

async function filterPokemon() {
  const response = await fetch("./pokemon.json");
  let data = await response.json();

  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  if (id.length) {
    data = data.filter((poke) => poke.id == id);
  }
  if (name.length) {
    data = [
      ...data.filter((poke) => {
        for (const [_, value] of Object.entries(poke.name)) {
          if (value.toLowerCase() == name.toLowerCase()) {
            return true;
          }
        }
      }),
    ];
  }
  if (type.length) {
    data = [
      ...data.filter((poke) => {
        return poke.type.find((t) => t === type);
      }),
    ];
  }
  createPokemonList(data);
}

setPokemonTypes();
