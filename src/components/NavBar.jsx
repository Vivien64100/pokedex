import { useState } from 'react';
import PropTypes from "prop-types";
import PokemonCard from './PokemonCard';


const NavBar = ({pokeprops,pokemonList}) => {
  const [pokemonCount , setPokemonCount] = pokeprops

 

  const handleClick = (pokemonCount) => {
    setPokemonCount(pokemonCount);
  };

    
    return (
      <div>
      {pokemonList.map((pokemon, pokemonCount) => {
         return (
          <button key={pokemonCount} onClick={() =>handleClick(pokemonCount)}>{pokemon.name}
         </button>);
         })}

 </div>
    )
}

export default NavBar;