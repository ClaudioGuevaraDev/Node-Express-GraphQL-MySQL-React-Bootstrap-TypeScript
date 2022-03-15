import { UserMutation } from "./UserMutation";
import { RolMutation } from "./RolMutation";
import { PokemonTypeMutation } from "./PokemonTypeMutation";

export const Mutation = {
  ...UserMutation,
  ...RolMutation,
  ...PokemonTypeMutation,
};
