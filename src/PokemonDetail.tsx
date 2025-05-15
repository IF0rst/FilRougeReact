import './css/App.css';
import PokeNav from "./components/PokeNav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeCardDetails from "./components/PokeCardDetails";
import CatchButton from "./components/CatchButton.tsx";
import ReleaseButton from "./components/ReleaseButton.tsx";

interface PokemonData {
    name: { fr: string, jp: string };
    sprites: { regular: string };
    types: { name: string }[];
    resistances: { name: string, multiplier: number }[];
    stats: Record<string, number>;
}

function Index() {
    const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
    const { id } = useParams();

    const update = async () => {
        try {
            const response = await fetch(`https://tyradex.vercel.app/api/v1/pokemon/${id}`, {
                method: 'GET',
                headers: {
                    'User-Agent': 'RobotPokemon',
                    'From': 'http://localhost:5174/',
                    'Content-Type': 'application/json',
                },
            });
            const data: PokemonData = await response.json();
            setPokemonData(data);
        } catch (e) {
            console.error('Erreur lors du chargement des données :', e);
            setPokemonData(null);
        }
    };

    useEffect(() => {
        if (id) {
            update();
        }
    }, [id]);

    return (
        <>
            <PokeNav />
            <div>
                {pokemonData ? (
                    <>
                        <PokeCardDetails
                            nom={pokemonData.name.fr}
                            nomJap={pokemonData.name.jp}
                            stats={Object.entries(pokemonData.stats).map(([k, v]) => `${k}: ${v}`)}
                            image={pokemonData.sprites.regular}
                            types={pokemonData.types.map((t, index) => <span key={index}>{t.name}</span>)}
                            resistances={pokemonData.resistances.map((r, index) => <span key={index}>{r.name}: {r.multiplier}</span>)}
                        />
                        <CatchButton id={pokemonData.pokedex_id} />
                        <ReleaseButton id={pokemonData.pokedex_id} />
                    </>
                ) : (
                    <p>Chargement des données...</p>
                )}
            </div>
        </>
    );
}

export default Index;
