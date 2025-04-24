import React, { useState } from 'react';

type TrainerInputProps = {
  onAddTrainer: (name: string, pokemons: string) => void;
};

const TrainerInput: React.FC<TrainerInputProps> = ({ onAddTrainer }) => {
  const [currentName, setCurrentName] = useState('');
  const [currentPokemons, setCurrentPokemons] = useState('');

  return (
    <div className="add-trn">
      <input
        placeholder="Nom"
        onChange={(e) => setCurrentName(e.target.value)}
      />
      <input
        placeholder="Nombre de pokemons"
        onChange={(e) => setCurrentPokemons(e.target.value)}
      />
      <button onClick={() => onAddTrainer(currentName, currentPokemons)}>
        Ajouter
      </button>
    </div>
  );
};

export default TrainerInput;
