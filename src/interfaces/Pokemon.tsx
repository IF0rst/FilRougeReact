export interface Pokemon {
    pokedex_id: number;
    generation: number;
    category: string;
    name: {
        fr: string; en: string; jp: string;
    };
    sprites: {
        regular: string; shiny: string; gmax: {
            regular?: string; shiny?: string;
        } | null;
    };
    types: {
        name: string; image: string;
    }[];
    talents: {
        name: string; tc: boolean;
    }[];
    stats: {
        hp: number; atk: number; def: number; spe_atk: number; spe_def: number; vit: number;
    };
    resistances: {
        name: string; multiplier: number;
    }[];
    evolution: {
        pre: {
            pokedex_id: number; name: string; condition: string;
        }[] | null; next: {
            pokedex_id: number; name: string; condition: string;
        }[] | null; mega: {
            orbe: string; sprites: {
                regular: string; shiny: string;
            };
        }[] | null;
    };
    height: string;
    weight: string;
    egg_groups: string[];
    sexe: {
        male: number; female: number;
    };
    catch_rate: number;
    level_100: number;
    formes: {
        region?: string; name: {
            fr: string; en: string; jp: string;
        };
    }[] | null;
}