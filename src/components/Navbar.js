import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getAllPokemon } from '../api/fetchPokemon';

function Navbar() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async function () {
      setPokemons(await getAllPokemon());
    })();
  }, []);

  return (
    <nav className="navbar border-r border-gray-200 bg-indigo-300">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            HOME
          </NavLink>
        </li>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <NavLink to={`/pokemon/${index + 1}`} activeClassName="active">{`${
              index + 1
            }. ${pokemon.name}`}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
