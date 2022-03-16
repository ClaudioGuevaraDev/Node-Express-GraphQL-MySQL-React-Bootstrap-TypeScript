import { gql } from "@apollo/client";

export const CREATE_POKEMON_TYPE = gql`
  mutation createPokemonType($pokemonType: PokemonTypeInput!) {
    createPokemonType(pokemonType: $pokemonType) {
      id
      name
    }
  }
`;

export const GET_ALL_POKEMON_TYPES = gql`
  query {
    getAllPokemonTypes {
      id
      name
    }
  }
`;

export const DELETE_POKEMON_TYPE = gql`
  mutation deletePokemonType($pokemon: DeletePokemonInput!) {
    deletePokemonType(pokemon: $pokemon) {
      message
      pokemonType {
        id
        name
      }
    }
  }
`;

export const UPDATE_POKEMON_TYPE = gql`
  mutation mutationUpdatePokemonType($pokemonType: UpdatePokemonInput!) {
    updatePokemonType(pokemonType: $pokemonType) {
      message
      pokemonType {
        id
        name
      }
    }
  }
`;
