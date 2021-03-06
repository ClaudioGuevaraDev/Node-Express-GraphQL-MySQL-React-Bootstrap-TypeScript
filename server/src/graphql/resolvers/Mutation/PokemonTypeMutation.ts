import { getRepository } from "typeorm";

import {
  CreatePokemonType,
  PokemonTypeId,
  UpdatePokemonType,
} from "../../../interfaces/PokemonType";
import { PokemonType } from "../../../entities";
import { AuthenticationError } from "apollo-server-core";
import jwt from "jsonwebtoken";
import { config } from "../../../config";

export const PokemonTypeMutation = {
  createPokemonType: async (
    _: undefined,
    args: CreatePokemonType,
    context: any
  ) => {
    if (context.token.length === 0)
      throw new AuthenticationError("No autorizado.");

    if (!jwt.verify(context.token, config.SECRET_TOKEN))
      throw new AuthenticationError("No autorizado.");

    const user: any = jwt.decode(context.token);

    if (user.rol !== "Root") throw new AuthenticationError("No autorizado");

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
  deletePokemonType: async (_: undefined, args: PokemonTypeId) => {
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
      throw new Error("Error deleting the type.");
    }
  },
  updatePokemonType: async (_: undefined, args: UpdatePokemonType) => {
    const pokemonType = await getRepository(PokemonType).findOne(
      args.pokemonType.id
    );

    if (!pokemonType) throw new Error("Pokemon type not found.");

    getRepository(PokemonType).merge(pokemonType, {
      name: args.pokemonType.name,
    });

    try {
      const savedPokemonType = await getRepository(PokemonType).save(
        pokemonType
      );

      return {
        message: "Pokemon type updated",
        pokemonType: savedPokemonType,
      };
    } catch (error) {
      throw new Error("Error updating the type.");
    }
  },
};
