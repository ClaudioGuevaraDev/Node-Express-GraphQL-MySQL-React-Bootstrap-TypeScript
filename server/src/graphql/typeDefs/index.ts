import { gql } from "apollo-server-express";

const Example = gql`
  type Query {
    hello: String
  }
`;

export const typeDefs = [Example];
