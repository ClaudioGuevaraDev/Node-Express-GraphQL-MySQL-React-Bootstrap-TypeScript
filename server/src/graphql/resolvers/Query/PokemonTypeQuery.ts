import { getRepository } from "typeorm";

import { PokemonType } from "../../../entities";

export const PokemonTypeQuery = {
  getAllPokemonTypes: async () => {
    const pokemonTypes = await getRepository(PokemonType).find();

    return pokemonTypes;
  },
};
