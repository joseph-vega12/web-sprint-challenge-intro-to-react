import React, {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios";

const App = () => {
  const [character, setCharacters] = useState([]);

  useEffect(() =>{
    const fetchCharacters = () => {
      axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch(err => {
        debugger
      })
    }
    fetchCharacters();
  },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character character={character} />
    </div>
  );
}

export default App;
