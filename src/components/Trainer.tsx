import React from 'react';

type trainerProps = {
  name: string;
  pokemons: number;
};

const Trainer: React.FC<trainerProps> = ({ name, pokemons }) => {
    return (
    <li>
      <h2>Trainer: {name}</h2>
      <label>Pokemons: {pokemons}</label>
    </li>
  );
};

export default Trainer;
