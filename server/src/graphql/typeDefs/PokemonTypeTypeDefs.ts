import { gql } from "apollo-server-core";

export const PokemonTypeTypeDefs = gql`
  type Query {
    getAllPokemonTypes: [PokemonType]
  }

  type Mutation {
    createPokemonType(pokemonType: PokemonTypeInput!): PokemonType
    deletePokemon(pokemon: DeletePokemonInput!): PokemonTypeResponse
  }

  type PokemonType {
    id: ID
    name: String
    createdAt: String
    updatedAt: String
  }

  type PokemonTypeResponse {
    message: String
    pokemonType: PokemonType
  }

  input PokemonTypeInput {
    name: String!
  }

  input DeletePokemonInput {
  id: String!}
`;
