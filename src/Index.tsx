import './css/App.css';
import PokeNav from "./components/PokeNav.tsx";
import { useAppSelector } from "./store/Hooks.ts";
import { selectCapturedPokemons } from "./store/stores/PokeSlice.ts";
import { useGetPokemonQuery } from './store/api/pokeApi.ts';
import PokeCard from "./components/PokeCard.tsx";
import { Link } from "react-router-dom";

interface PokemonData {
    id: number;
    name: string;
    sprite: string;
}

function Index() {
    const capturedIds = useAppSelector(selectCapturedPokemons);

    const pokemonQueries = capturedIds.map(id => ({
        id,
        ...useGetPokemonQuery(id),
    }));

    const pokemons: PokemonData[] = pokemonQueries
        .filter(query => query.data && !query.isFetching && !query.isError)
        .map(query => ({
            id: query.id,
            name: query.data.name.fr,
            sprite: query.data.sprites.regular,
        }));

    const isLoading = pokemonQueries.some(query => query.isFetching);
    const hasError = pokemonQueries.some(query => query.isError);

    return (
        <>
            <PokeNav />
            {isLoading && <p>Chargement des Pokémon...</p>}
            {hasError && <p>Erreur lors du chargement de certains Pokémon.</p>}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
                {pokemons.map(pk => (
                    <Link to={`/pokemon/${pk.id}`} key={pk.id}>
                        <PokeCard name={pk.name} image={pk.sprite} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Index;
