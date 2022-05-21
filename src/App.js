
import './App.css';
import axios from 'axios';
import React, {useState} from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState('');

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url);
      
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name)
      setPokemonData(toArray);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase())
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  return (
    <div className='App'>
      <form onSubmit = {handleSubmit}>
        <label>
          <input
            type ='text'
            onChange = {handleChange}
            placeholder = 'Enter A Pokemon Name'
          />
        </label>
      </form>
    
      {pokemonData.map((data) => {
        return(
          <div className = 'container'>
                              
            <div className = 'divTable'>
              <div className = 'divTableBody'>

              <img src = {data.sprites['front_default']} alt = 'pokemon'/> 

                <div className = 'pokemonName'>{data.name}</div>

                <div className = 'divTableDetails'>
                  <div className = 'handle'>

                    <div className = 'divTableRow'>
                      <div className = 'divTableCell'>Type</div>
                      <div className = 'divTableCell'>{pokemonType}</div>
                    </div>

                    <div className = 'divTableRow'>
                      <div className = 'divTableCell'>Height</div>
                      <div className = 'divTableCell'>
                        {''}
                        {Math.round(data.height * 3.9) + '"'}
                      </div>
                    </div>

                    <div className = 'divTableRow'>
                      <div className = 'divTableCell'>Weight</div>
                      <div className = 'divTableCell'>
                        {''}
                        {Math.round(data.weight / 4.3)} lbs
                      </div>
                    </div>

                    <div className = 'divTableRow'>
                      <div className = 'divTableCell'>Abilities</div>
                      <div className = 'divTableCell'>
                        {''}
                        {data.abilities[0].ability.name} <br></br>     
                        {data.abilities[1].ability.name}               
                      </div>
                    </div>
                  </div>

                  <div className = 'handle'>

                    <div className = 'divTableRow'>
                      <div className = 'divTableCell'></div>
                      <div className = 'divTableCell'>
                        {''}
                        <i className="fa-solid fa-circle-dot"></i>hp: {data.stats[0].base_stat} <br></br>
                        <i className="fa-solid fa-circle-dot"></i>attack: {data.stats[1].base_stat} <br></br>
                        <i className="fa-solid fa-circle-dot"></i>defense: {data.stats[2].base_stat} <br></br>
                        <i className="fa-solid fa-circle-dot"></i>special attack: {data.stats[3].base_stat} <br></br>
                        <i className="fa-solid fa-circle-dot"></i>special defence:{data.stats[4].base_stat} <br></br>
                        <i className="fa-solid fa-circle-dot"></i>speed: {data.stats[5].base_stat}
                      </div>
                    </div>

                    </div>

                </div>

              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
