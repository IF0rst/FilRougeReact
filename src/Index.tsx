import './css/App.css';
import PokeNav from "./components/PokeNav.tsx";
import {useEffect, useState} from "react";
import {selectCapturedPokemons, useAppSelector} from "./store/Hooks.ts";
import PokeCard from "./components/PokeCard.tsx";
import {Link} from "react-router-dom";

interface PokemonData {
    name: string;
    sprite: string;
    id: number;
}

function Index() {
    const [savedPk, setPk] = useState<PokemonData[]>([]);
    const selector = useAppSelector(selectCapturedPokemons);

    const getPkData = async (id: number): Promise<PokemonData | undefined> => {
        try {
            const response = await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${id}`, {
                method: 'GET',
                headers: {
                    'User-Agent': 'RobotPokemon',
                    'From': 'http://localhost:5174/',
                    'Content-Type': 'application/json',
                },
            });
            const {name, sprites} = await response.json();
            return {id:id,name: name.fr, sprite: sprites.regular};
        } catch (e) {
            console.error('Erreur lors du chargement des données :', e);
            return undefined;
        }
    };

    const updatePkList = async () => {
        try {
            const results = await Promise.all(selector.map(p => getPkData(p)));
            const validResults = results.filter((pk): pk is PokemonData => pk !== undefined);
            setPk(validResults);
        } catch (e) {
            console.error("Erreur lors de la mise à jour de la liste des Pokémon :", e);
        }
    };

    useEffect(() => {
        if (selector.length > 0) {
            updatePkList();
        }
    }, [selector]);

    return (
        <>
            <PokeNav/>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px'}}>
                {savedPk.map((pk, index) => (
                    <Link to={`/pokemon/${pk.id}`}><PokeCard key={index} name={pk.name} image={pk.sprite}/></Link>
                ))}
            </div>
        </>
    );
}

export default Index;
