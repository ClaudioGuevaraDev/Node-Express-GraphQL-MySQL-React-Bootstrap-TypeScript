import { gql } from "apollo-server-express"

export const PokemonTypeDefs = gql`
    type Query {
        pokemones: [Pokemon]
    }
    
    type Mutation {
        createPokemon:
    }
`