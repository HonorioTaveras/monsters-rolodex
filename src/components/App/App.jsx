import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

// COMPONENTS
import { CardList } from '../CardList/CardList.jsx';
import { SearchBox } from '../SearchBox/SearchBox.jsx';

export default function App() {
  const [err, setErr] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

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
    );
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  }

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monsters"
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
