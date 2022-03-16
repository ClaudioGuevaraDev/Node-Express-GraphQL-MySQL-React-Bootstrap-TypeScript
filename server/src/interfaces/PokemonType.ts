export interface CreatePokemonType {
  pokemonType: {
    name: string;
  };
}

export interface PokemonTypeId {
  pokemon: {
    id: string;
  };
}

export interface UpdatePokemonType {
  pokemonType: {
    id: number;
    pokemon: {
      name: string;
    };
  };
}
