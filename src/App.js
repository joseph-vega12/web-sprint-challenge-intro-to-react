import React, {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios";
import styled from "styled-components";

const Heading = styled.h1`
font-size: 50px; 
margin-top: 5%;
`
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
      <Heading className="Header">Characters</Heading>
      <Character character={character} />
    </div>
  );
}

export default App;
