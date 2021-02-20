import React, { useEffect, useState } from 'react';

import { getPokemonData } from '../api/fetchPokemon';

function Pokemon({ match }) {
  const { id } = match.params;
  const [pokemonStats, setPokemonStats] = useState({});

  useEffect(() => {
    (async function () {
      setPokemonStats(await getPokemonData(id));
    })();
  }, [id]);

  console.log(pokemonStats);

  return (
    <div className="content bg-pink-300 h-screen overflow-y-auto">
      <h1 className="text-3xl">{pokemonStats.name}</h1>
      <img src={pokemonStats.sprites.other['official-artwork'].front_default} />
    </div>
  );
}

export default Pokemon;
