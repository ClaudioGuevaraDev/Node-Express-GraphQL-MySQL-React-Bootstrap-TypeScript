import { gql } from "apollo-server-express";

export const RolTypeDefs = gql`
  type Query {
    getAllRoles: [Rol]
  }

  type Mutation {
    createRol(rol: CreateRolInput!): Rol!
  }

  type Rol {
    id: ID
    name: String
    users: [User]
    createdAt: String
    updatedAt: String
  }

  type User {
    id: ID
    username: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
  }

  input CreateRolInput {
    name: String!
  }
`;
