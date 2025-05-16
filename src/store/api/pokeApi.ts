import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
    reducerPath: "pokemonApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://tyradex.app/api/v1" }),
    tagTypes: ["PokemonGen"],
    endpoints: (builder) => ({
        getGen: builder.query({
            query: (gen = 1) => `gen/${gen}`,
            providesTags: () => ["PokemonGen"],
        }),

        getPokemon: builder.query({
            query: (id) => `pokemon/${id}`,
        }),
    }),
});

export const { useGetGenQuery, useGetPokemonQuery } = pokemonApi;