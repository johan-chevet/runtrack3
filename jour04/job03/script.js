async function setPokemonTypes() {
  const response = await fetch("./pokemon.json");
  const pokemonList = await response.json();
  const typeSet = new Set();
  pokemonList.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      typeSet.add(type);
    });
  });
  const typeElement = document.querySelector("#type");
  typeSet.forEach((type) => {
    const option = document.createElement("option");
    option.innerText = type;
    typeElement.append(option);
  });
}

function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-card");

  const name = document.createElement("div");
  name.classList.add("pokemon-name");
  const names = document.createElement("div");
  names.classList.add("names");

  for ([key, value] of Object.entries(pokemon.name)) {
    if (key === "english") {
      name.innerText = pokemon.name["english"] + " " + "(#" + pokemon.id + ")";
    } else {
      const otherName = document.createElement("div");
      const label = document.createElement("span");
      label.classList.add("label");
      label.innerText = key + ": ";
      otherName.append(label);
      otherName.append(document.createTextNode(value));
      names.append(otherName);
    }
  }
  const types = document.createElement("div");
  types.classList.add("types");
  for ([key, value] of Object.entries(pokemon.type)) {
    const type = document.createElement("span");
    type.classList.add("type", `type-${value}`);
    type.innerText = value;
    types.append(type);
  }

  const stats = document.createElement("div");
  stats.classList.add("stats");
  for ([key, value] of Object.entries(pokemon.base)) {
    const stat = document.createElement("div");
    stat.classList.add("stat");
    const label = document.createElement("span");
    label.classList.add("label");
    label.innerText = key + ": ";
    stat.append(label);
    stat.append(document.createTextNode(value));
    stats.append(stat);
  }
  card.append(name, names, types, stats);
  return card;
}

function createPokemonList(data) {
  let pokemonList = document.getElementById("pokemon-list");
  if (pokemonList) {
    pokemonList.remove();
  }
  pokemonList = document.createElement("div");
  pokemonList.setAttribute("id", "pokemon-list");
  data.forEach((pokemon) => {
    const card = createPokemonCard(pokemon);
    pokemonList.append(card);
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
          if (value.toLowerCase().includes(name.toLowerCase())) {
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

setPokemonTypes().catch(console.error);
