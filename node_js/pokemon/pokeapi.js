
import fetch from 'node-fetch';

BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemon(name) {
    try {
        const response = await fetch(`${BASE_URL}/pokemon/${name.toLowerCase()}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch Pokémon: ${name}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching Pokémon:", error.message);
        return null;
    }
}

export async function fetchMoveDetails(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch Move details: ${url}`);
        }
        const data = await response.json();
        return {
            name: data.name,
            power: data.power || 40,
            accuracy: data.accuracy || 100,
            pp: data.pp || 10,
        };
    } catch (error) {
        console.error("Error fetching Move details:", error.message);
        return null;
    }
}