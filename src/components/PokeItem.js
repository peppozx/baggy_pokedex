import React from "react";
import "../styles/pokeitem.css";

export default function PokeItem({ pokemon }) {
  return (
    <div className="poke-div">
      <div className="poke-name">
        <b>Names:</b>
        <span>Normal: {pokemon.name}</span>
      </div>
      <div class="poke-image">
        <img height="50px" width="50px" src={pokemon.img}/>
      </div>
      <div className="poke-type">
        <b>Types:</b>
        {pokemon.type.map(pokeType => (
          <span>{pokeType}</span>
        ))}
      </div>
    </div>
  );
}
