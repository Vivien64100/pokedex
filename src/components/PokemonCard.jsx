import PropTypes from "prop-types";

const PokemonCard = ({pokemon}) =>{

console.log(pokemon);

    return ( 
    <figure>
         { pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt= {pokemon.name} />) : (<p>???</p>)}
         <figcaption>{pokemon.name}</figcaption>
    </figure>     
 ); ;
} 

PokemonCard.propTypes = {
     pokemon: PropTypes.shape({
          name: PropTypes.string.isRequired,
          Imgsrc: PropTypes.string,
     }).isRequired,
     };


export default PokemonCard;