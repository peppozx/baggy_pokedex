import React from "react";
import "../styles/pokeitem.css";
import { format } from "util";

export default function PokeItem({ pokemon }) {
  const getFormattedArrayOfAttributes = base => {
    let arrayOfAttributes = [];
    for (let key in base) {
      arrayOfAttributes.push({
        name: key,
        value: base[key]
      });
    }
    return arrayOfAttributes;
  };
  const attributes = getFormattedArrayOfAttributes(pokemon.base);
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
      {/*<div className="poke-base">
        <p>Attributes:</p>
        {attributes.map(attribute => (
          <span>
            {attribute.name}: {attribute.value}
          </span>
        ))}
      </div> */}
    </div>
  );
}
