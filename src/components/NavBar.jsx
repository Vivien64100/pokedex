import { useState } from 'react';
import PropTypes from "prop-types";


const NavBar = ({pokeprops,pokemonList}) => {
  const [pokemonCount , setPokemonCount] = pokeprops

  const handleClickSui = () => 
  setPokemonCount(
    pokemonCount < pokemonList.length -1 ? pokemonCount +1 : pokemonCount);

  const handleClickPre = () => 
  setPokemonCount (
    pokemonCount > 0 ? pokemonCount - 1 : pokemonCount );
    
    return (
        <div>
        {pokemonCount > 0 ? (
            <button onClick={handleClickPre}>Précédent</button>
          ) : undefined}
          {pokemonCount < pokemonList.length -1 ? (
            <button onClick={handleClickSui}>Suivant </button>
          ) : undefined}
        </div>
    )
}

export default NavBar;