import {useState} from 'react';
import './App.css';

import Trainer from "./components/Trainer.tsx";
import TrainerInput from "./components/TrainerInput.tsx";
import Pokelist from "./components/Pokelist.tsx";
import PokeSelect from "./components/PokeSelect.tsx";

function App() {
    const [trainers, setTrainers] = useState<{ name: string; pokemons: number }[]>([]);
    const [generation, setGeneration] = useState('gen/1');

    const addTrainer = (name: string, nbPokemons: string) => {
        if (!name || !nbPokemons) return;
        if (trainers.length > 1) return;

        setTrainers(prevTrainers => [...prevTrainers, {name, pokemons: parseInt(nbPokemons, 10)},]);
    };

    return (<div>
            <h1>Add your trainer!</h1>
            <TrainerInput onAddTrainer={addTrainer}/>
            {/* TODO: Mettre l'ul dans un component TrainerList*/}
            <ul>
                {trainers.map((trainer, index) => (
                    <Trainer key={index} name={trainer.name} pokemons={trainer.pokemons}/>))}
            </ul>
            <h1>Pokemons:</h1>
           <PokeSelect generationChanged={setGeneration}></PokeSelect>
        <Pokelist generation={generation}></Pokelist>
    </div>);
}

export default App;
