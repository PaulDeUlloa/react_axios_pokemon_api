import React from "react";

const PokemonName = (props) => {
    return (
        <div>
            <ul>
                {props.pokemonName.map((pokemon, idx) => {
                    return (
                        <li key={idx} className="list-group-item">{idx + 1}: {pokemon.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PokemonName;