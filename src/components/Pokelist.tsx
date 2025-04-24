import React, {useEffect, useState} from 'react';
import {Pokemon} from "../interfaces/Pokemon.tsx";

type PokeListProps = {
    generation: string;
};

const Pokelist: React.FC<PokeListProps> = ({generation}) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [error, setError] = useState<boolean>(false);

    const update = async () => {
        try {
            const response = await fetch(`https://tyradex.vercel.app/api/v1/${generation}`, {
                method: 'GET', headers: {
                    "User-Agent": "RobotPokemon", "From": "http://localhost:5173/", 'Content-type': 'application/json'
                },
            });
            const data = await response.json();
            if (Array.isArray(data)) {
                setPokemons(data);
                setError(false);
            } else {
                throw new Error("Data is not an array");
            }
        } catch (e) {
            setPokemons([]);
            setError(true);
            console.log("Invalid generation submitted!");
        }
    };

    useEffect(() => {
        update();
    }, [generation]);

    return (<div className="pokelist-container">
        <h2>Generation {generation}</h2>
        {error ? (<h3>Invalid generation submitted...</h3>) : (<ul>
            {pokemons.map((pokemon, index) => (<li key={index}>{`${index + 1} - ${pokemon.name.fr}`}</li>))}
        </ul>)}
    </div>);
};

export default Pokelist;
