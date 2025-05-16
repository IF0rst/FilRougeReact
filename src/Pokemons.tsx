import './css/App.css';
import PokeNav from './components/PokeNav.tsx';
import PokeCard from './components/PokeCard.tsx';
import { useGetGenQuery } from './store/api/pokeApi.ts';
import { Link } from 'react-router-dom';

type pokeSimpleData = {
    pokedex_id: string;
    name: { fr: string };
    sprites: { regular: string };
};

function Index() {
    const { data: pokemons = [], isLoading, isError } = useGetGenQuery(1);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Failed to load Pokémon data.</div>;

    return (
        <>
            <PokeNav />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
                {pokemons.map((pokemon: pokeSimpleData) => (
                    <Link to={`/pokemon/${pokemon.pokedex_id}`} key={pokemon.pokedex_id}>
                        <PokeCard name={pokemon.name.fr} image={pokemon.sprites.regular} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Index;
