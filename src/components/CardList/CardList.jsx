import React from 'react';

import './CardList.css';

import { Card } from '../Card/Card.jsx';

export const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
