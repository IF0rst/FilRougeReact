import './css/App.css';
import PokeNav from "./components/PokeNav";
import { useParams } from "react-router-dom";
import PokeCardDetails from "./components/PokeCardDetails";
import CatchButton from "./components/CatchButton.tsx";
import ReleaseButton from "./components/ReleaseButton.tsx";
import { useGetPokemonQuery} from "./store/api/pokeApi.ts";

function Index() {
    const { id } = useParams();
    const { data: pokemonData = [], isLoading, isError } = useGetPokemonQuery(id);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Failed to load Pokémon data.</div>;

    return (
        <>
            <PokeNav />
            <div>
                    <>
                        <PokeCardDetails
                            nom={pokemonData.name.fr}
                            nomJap={pokemonData.name.jp}
                            stats={Object.entries(pokemonData.stats).map(([k, v]) => `${k}: ${v}`)}
                            image={pokemonData.sprites.regular}
                            types={pokemonData.types.map((t, index: number) => <span key={index}>{t.name}</span>)}
                            resistances={pokemonData.resistances.map((r, index: number) => <span key={index}>{r.name}: {r.multiplier}</span>)}
                        />
                        <CatchButton id={pokemonData.pokedex_id} />
                        <ReleaseButton id={pokemonData.pokedex_id} />
                    </>
            </div>
        </>
    );
}

export default Index;
