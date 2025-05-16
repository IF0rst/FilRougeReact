import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type {RootState} from "../store.ts";

interface PokemonCapturedState {
    capturedPokemons: number[];
}

const initialState: PokemonCapturedState = {
    capturedPokemons: [],
};

const pokeSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        addPokemon: (state, action: PayloadAction<number>) => {
            const pokemonId = action.payload;
            if (!state.capturedPokemons.includes(pokemonId)) {
                state.capturedPokemons.push(pokemonId);
            }
        },
        releasePokemon: (state, action: PayloadAction<number>) => {
            const pokemonId = action.payload;
            state.capturedPokemons = state.capturedPokemons.filter(id => id !== pokemonId);
        },
    },
});

export const selectCapturedPokemons = (state: RootState) => state.pokemon.capturedPokemons;
export const { addPokemon, releasePokemon } = pokeSlice.actions;
export default pokeSlice.reducer;
