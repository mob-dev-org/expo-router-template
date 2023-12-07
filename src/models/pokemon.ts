export type Pokemon = {
    id: number;
    name: string;
    types: string[];
    image: string;
    height: number;
    weight: number;
    abilities: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
};

// Pokemon List
export type PokemonList = {
    count: number;
    next: string;
    previous: string;
    results: PokemonListItem[];
};

export type PokemonListItem = {
    name: string;
    url: string;
};
