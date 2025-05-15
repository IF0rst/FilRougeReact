import './css/App.css';
import PokeNav from './components/PokeNav.tsx';
import PokeCard from './components/PokeCard.tsx';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

type pokeSimpleData = {
    pokedex_id : string;
    name: string[],
    sprites : string[],
}

function Index() {
    const [pokemons, setPokemons] = useState([]);

    const update = async () => {
        try {
            const response = await fetch('https://tyradex.vercel.app/api/v1/gen/1', {
                method: 'GET',
                headers: {
                    'User-Agent': 'RobotPokemon',
                    'From': 'http://localhost:5174/',
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setPokemons(data);
        } catch (e) {
            console.error('Erreur lors du chargement des données :', e);
            setPokemons([]);
        }
    };

    useEffect(() => {
        update();
    }, []);

    return (
        <>
            <PokeNav />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
                {pokemons.map((pokemon : pokeSimpleData, index) => (
                    <Link to={`/pokemon/${pokemon.pokedex_id}`}><PokeCard key={index} name={pokemon.name.fr} image={pokemon.sprites.regular} /></Link>
                ))}
            </div>
        </>
    );
}

export default Index;