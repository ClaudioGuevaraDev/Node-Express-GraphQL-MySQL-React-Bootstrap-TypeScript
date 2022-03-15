import { gql } from "apollo-server-core";

export const PokemonTypeTypeDefs = gql`
  type Query {
    getAllPokemonTypes: [PokemonType]
  }

  type Mutation {
    createPokemonType(pokemonType: PokemonTypeInput!): PokemonType
  }

  type PokemonType {
    id: ID
    name: String
    createdAt: String
    updatedAt: String
  }

  input PokemonTypeInput {
    name: String!
  }
`;
