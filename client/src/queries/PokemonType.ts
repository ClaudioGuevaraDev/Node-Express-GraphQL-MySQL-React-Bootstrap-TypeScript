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

export const DELETE_POKEMON = gql`
  mutation ($pokemon: DeletePokemonInput!) {
    deletePokemon(pokemon: $pokemon) {
      message
      pokemonType {
        id
        name
      }
    }
  }
`;
