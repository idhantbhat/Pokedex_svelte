import type { Load } from '@sveltejs/kit';

const REGION_TO_POKEDEX = {
    "Kanto": 1,
    "Johto": 2,
    "Hoenn": 3,
    "Sinnoh": 4,
    "Unova": 5,
    "Kalos": 6,
    "Alola": 7,
    "Galar": 8
};

async function fetchFromPokeAPI(pokedexId) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokedex/${pokedexId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch from PokeAPI");
    }
    return response.json();
}

export const load: Load = async ({ params }) => {
    const { slug } = params;
    const pokedexId = REGION_TO_POKEDEX[slug] || 1; // Default to Kanto if slug is not recognized
    const json = await fetchFromPokeAPI(pokedexId);
    const monsters = json.pokemon_entries.map(entry => entry.pokemon_species);

    return {
        monsters
    };
};
