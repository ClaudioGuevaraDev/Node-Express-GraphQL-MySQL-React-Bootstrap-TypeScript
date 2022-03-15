import { UserQuery } from "./UserQuery";
import { RolQuery } from "./RolQuery";
import { PokemonTypeQuery } from "./PokemonTypeQuery";

export const Query = {
  ...UserQuery,
  ...RolQuery,
  ...PokemonTypeQuery,
};
