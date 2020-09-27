import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';

// COMPONENTS
import { CardList } from '../CardList/CardList.jsx';

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
    );
  }, []);

  return (
    <div className='App'>
      <CardList monsters={monsters} />
    </div>
  );
}
