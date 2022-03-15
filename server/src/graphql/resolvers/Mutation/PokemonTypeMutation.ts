import { getRepository } from "typeorm";

import { CreatePokemonType } from "../../../interfaces/PokemonType";
import { PokemonType } from "../../../entities";

export const PokemonTypeMutation = {
  createPokemonType: async (_: undefined, args: CreatePokemonType) => {
    const newPokemonType = getRepository(PokemonType).create(args.pokemonType);

    try {
      const savedPokemonType = await getRepository(PokemonType).save(
        newPokemonType
      );

      return savedPokemonType;
    } catch (error: any) {
      if (error.code === "ER_DUP_ENTRY")
        throw new Error("The type already exists.");
    }
  },
};
