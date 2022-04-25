import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css'
import Character from "./components/Character"
import styled from "styled-components";


const App = () => {
   // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starPeople, setStarPeople] = useState([]);
  
  // need to create details button

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people/')
    .then((res) => {
      //console.log(res.data);

      let characters = res.data;
      let id = 1;
      characters?.forEach((item) => (item.id = id++));
      //console.log(characters);

      setStarPeople(characters);
      //console.log(`${starPeople}`)
    })
    .catch((err) => {
      console.error(err);
     });
    }, []);
    

  const StarDiv = styled.div`
   margin: 0 auto;
   box-sizing: border-box;
   width: 65%;
   display: flex;
   row-gap: none;
   flex-direction: column;
   justify-content: space-between;
   backgroundColor: transparent;
   `;

   
  


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StarDiv>
        {starPeople && starPeople.map((info) => {
          info.id = info.name;
          return (
            <>
            <Character
            key={info.name}
            info={info}
            />
            </>
          )
        })}
      </StarDiv>
      
    </div>
  );
}

export default App;
