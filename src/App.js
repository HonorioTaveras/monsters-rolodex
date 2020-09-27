import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

// COMPONENTS
import monsterData from './components/dummData.js';

export default function App() {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users').then(
      (res) => {
        setIsLoaded(true);
        setMonsters(res.data);
      },
      (err) => {
        setIsLoaded(true);
        setErr(err);
      }
    )
  }, [])

  return (
    <div className="App">
      {
        monsters.map((monster) => (
          <h1 key={monster.id}>
            {monster.name}
          </h1>
        ))
      }
    </div>
  );
}
