import { getRepository } from "typeorm";

import {
  CreatePokemonType,
  PokemonTypeId,
} from "../../../interfaces/PokemonType";
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
  deletePokemon: async (_: undefined, args: PokemonTypeId) => {
    const pokemonType = await getRepository(PokemonType).findOne(
      parseInt(args.pokemon.id)
    );

    if (!pokemonType) throw new Error("Pokemon type not found.");

    try {
      await getRepository(PokemonType).delete(parseInt(args.pokemon.id));
      return {
        message: "Pokemon type deleted.",
        pokemonType,
      };
    } catch (error) {
      console.log(error);
      throw new Error("error");
    }
  },
};
