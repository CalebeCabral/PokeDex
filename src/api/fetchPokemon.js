export async function getAllPokemon() {
  return await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(pokemons => pokemons.results);
}

export async function getPokemonData(pokeId) {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then(res => res.json())
    .then(stats => stats);
}