import React from "react";
import "../styles/pokeitem.css";
import { format } from "util";

export default function PokeItem({ pokemon }) {
  console.log(pokemon);
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
        <span>Chinese: {pokemon.name.chinese}</span>
        <span>English: {pokemon.name.english}</span>
        <span>French: {pokemon.name.french}</span>
        <span>Japanese: {pokemon.name.japanese}</span>
      </div>
      <div className="poke-type">
        <b>Types:</b>
        {pokemon.type.map(pokeType => (
          <span>{pokeType}</span>
        ))}
      </div>
      <div className="poke-base">
        <p>Attributes:</p>
        {attributes.map(attribute => (
          <span>
            {attribute.name}: {attribute.value}
          </span>
        ))}
      </div>
    </div>
  );
}
