import { useState } from 'react';
import './App.css';

function App() {

  const [pokemonList, setPokemonList] = useState([]);

  //arrow function getPokemon
  const getPokemonList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=807') //had to change offset and limit to give us the right pokemon and right amount of pokemons we wanted
      .then(res=> {
        return res.json();
      })
        .then(res=> {
          // console.log(res)
          setPokemonList(res.results)
          console.log(pokemonList)
        })
      .catch(err => {
        console.log(err)
      })
  }

  const style = {
    marginLeft: "40px"
  }

  // const width = {
  //   width: "10px",
  //   textAlign: "center"
  // }

  return (
    <div style={style}>
      <h1>Pokemon List</h1>
      <button onClick={getPokemonList}>Fetch 807 Pokemon</button>
      <ul>
        {
          pokemonList.length > 0 && pokemonList.map((pokemon, i) => {
            return (<li key={i+1}>{pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</li>)
          })}
      </ul>
    </div>
  );
}

export default App;
