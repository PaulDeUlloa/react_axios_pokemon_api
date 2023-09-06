import './App.css';
import { useState } from 'react';
import PokemonFetch from "./components/PokemonFetch";
import PokemonName from "./components/PokemonName";
import axios from 'axios';


function App() {
  const [pokemonName, setPokemonName] = useState([]);

  const fetchPokemon = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807&offset=0`)
      .then((res) => {
        console.log(res);
        setPokemonName(res.data.results);
    })
    .catch((err) => console.log(err));
};


  return (
    <div className="container mt-3 d-flex flex-column align-items-center">
      <PokemonFetch fetchPokemon={fetchPokemon} />
      <PokemonName pokemonName={pokemonName} />
    </div>
  );
};

export default App;
