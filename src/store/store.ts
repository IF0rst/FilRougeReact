import {configureStore} from "@reduxjs/toolkit";
import pokemonReducer from "./stores/PokeSlice.ts";
import {pokemonApi} from "./api/pokeApi.ts";

export const store = configureStore({
    reducer: {
        pokemon: pokemonReducer,
        [pokemonApi.reducerPath] : pokemonApi.reducer
    },
    middleware : (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;